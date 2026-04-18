"use server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function submitRSVP(
  eventId: string,
  eventSlug: string,
  formData: {
    name: string
    email: string
    phone: string
    guests: string
    comments: string
  },
): Promise<{ success: boolean; message: string }> {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: existing, error: checkError } = await supabase
    .from("event_rsvps")
    .select("id")
    .eq("event_id", eventId)
    .eq("email", formData.email)
  // .maybeSingle()

  if (checkError) {
    return {
      success: false,
      message: "Error al verificar si el correo ya está registrado",
    }
  }
  console.log(existing)
  if (existing && existing.length > 0) {
    return {
      success: false,
      message: "Ya te has registrado para este evento con este correo",
    }
  }

  const { error } = await supabase.from("event_rsvps").insert({
    event_id: eventId,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    guests: parseInt(formData.guests),
    comments: formData.comments || null,
  })

  if (error) {
    return { success: false, message: "Error al registrar tu asistencia" }
  }

  revalidatePath(`/eventos/${eventSlug}`)
  revalidatePath(`/eventos/${eventSlug}/rsvp`)

  return { success: true, message: "Asistencia confirmada" }
}

export async function getEventAttendees(eventId: string): Promise<number> {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
    .from("event_rsvps")
    .select("guests")
    .eq("event_id", eventId)

  if (error || !data) return 0

  return data.reduce((sum, row) => sum + (row.guests ?? 0), 0)
}

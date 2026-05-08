"use server"
import { adminClient } from "@/lib/supabase/admin"

export async function addNewsletterSubscriber(email: string): Promise<{
  success: boolean
  message: string
}> {
  const { data: existingRecords, error: checkError } = await adminClient
    .from("newsletter_subscribers")
    .select("email")
    .eq("email", email)

  if (checkError) {
    console.error(
      "Error al verificar si el correo ya está suscrito.",
      checkError,
    )
    return {
      success: false,
      message: "Error al verificar si el correo ya está suscrito",
    }
  }
  if (existingRecords && existingRecords.length > 0) {
    return {
      success: false,
      message: "Este correo ya está suscrito a la newsletter",
    }
  }

  const { error } = await adminClient
    .from("newsletter_subscribers")
    .insert({ email })

  if (error) {
    if (error.code === "23505") {
      return {
        success: false,
        message: "Este correo ya está suscrito a la newsletter",
      }
    }
    return {
      success: false,
      message: "Error al suscribirse a la newsletter",
    }
  }
  return {
    success: true,
    message: "Suscrito a la newsletter",
  }
}

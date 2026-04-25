import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase/server"
import AdminSidebar from "./AdminSidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen bg-lightGray">
      <AdminSidebar email={user.email ?? ""} />
      {/* pt-14 offsets the fixed mobile top bar; removed on lg+ */}
      <main className="flex-1 pt-14 lg:pt-0 p-4 lg:p-8 overflow-auto min-w-0">
        {children}
      </main>
    </div>
  )
}

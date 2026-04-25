import SignInButton from "./SignInButton"

export const metadata = {
  title: "Panel de Administración — Fuerza del Pueblo",
  robots: "noindex",
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="min-h-screen bg-lightGray flex items-center justify-center p-4">
      <div className="bg-pureWhite rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-darkGreen rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-xl font-bold">FP</span>
          </div>
          <h1 className="text-xl font-bold text-charcoal">
            Panel de Administración
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Fuerza del Pueblo · Verón–Punta Cana
          </p>
        </div>

        {error === "no-autorizado" && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 text-center">
            Tu cuenta no tiene acceso al panel de administración.
          </div>
        )}

        <SignInButton />
      </div>
    </div>
  )
}

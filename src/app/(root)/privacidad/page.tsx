import { Metadata } from "next"

export default function Privacidad() {
  return (
    <div>
      <h1>Política de Privacidad</h1>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Política de Privacidad",
    description: "Política de Privacidad",
  }
}
import { Metadata } from "next"


export default function Terminos() {
  return (
    <div>
      <h1>Términos y Condiciones</h1>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Términos y Condiciones",
    description: "Términos y Condiciones",
  }
}
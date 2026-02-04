import "@/app/globals.css"
import { Montserrat, Open_Sans } from "next/font/google"
import Link from "next/link"
import { NavbarContainer } from "@/components/layout/Nav/NavbarContainer"
import { FooterContainer } from "@/components/layout/Footer/FooterContainer"
import { Container } from "@/components/HomePage/Container"
import { getGeneralLayout } from "@/sanity/queries/GeneralLayout/GeneraLayout"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export default async function NotFound() {
  const generalLayout = await getGeneralLayout()

  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased overflow-x-hidden`}
      >
        <NavbarContainer logo={generalLayout.logo} />
        <main>
          <section className="relative bg-linear-to-br from-darkGreen to-charcoal text-white py-20 md:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--color-primaryGreen) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            <Container className="relative z-10">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <p className="text-8xl md:text-9xl font-bold text-primaryGreen/30">
                  404
                </p>
                <p className="text-primaryGreen font-semibold text-lg md:text-xl uppercase tracking-wide">
                  Página no encontrada
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Lo sentimos, esta página no existe
                </h1>
                <p className="text-xl text-white/90">
                  La página que buscas pudo haber sido movida, eliminada o la
                  dirección podría ser incorrecta.
                </p>
                <div className="pt-6">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-primaryGreen text-white hover:bg-primaryGreen/90 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </Container>

            {/* Bottom Wave */}
            <div className="absolute -bottom-1 left-0 right-0">
              <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                  fill="white"
                />
              </svg>
            </div>
          </section>
        </main>
        <FooterContainer generalLayout={generalLayout} />
      </body>
    </html>
  )
}
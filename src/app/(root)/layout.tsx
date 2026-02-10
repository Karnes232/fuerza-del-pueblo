import type { Metadata } from "next"
import "@/app/globals.css"

import { Montserrat, Open_Sans } from "next/font/google"
import { NavbarContainer } from "@/components/layout/Nav/NavbarContainer"
import { FooterContainer } from "@/components/layout/Footer/FooterContainer"
import { getGeneralLayout } from "@/sanity/queries/GeneralLayout/GeneraLayout"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fuerza del Pueblo",
  description: "Fuerza del Pueblo",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const generalLayout = await getGeneralLayout()
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <NavbarContainer logo={generalLayout.logo} />
        {children}
        <FooterContainer generalLayout={generalLayout} />
      </body>
    </html>
  )
}

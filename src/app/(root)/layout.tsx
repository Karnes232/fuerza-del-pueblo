import type { Metadata } from "next"
import "@/app/globals.css"

import { Montserrat, Open_Sans } from "next/font/google"
import { NavbarContainer } from "@/components/layout/Nav/NavbarContainer"
import { FooterContainer } from "@/components/layout/Footer/FooterContainer"
import { getGeneralLayout } from "@/sanity/queries/GeneralLayout/GeneraLayout"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
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
    <html lang="es">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased overflow-x-hidden `}
      >
        <NavbarContainer logo={generalLayout.logo} />
        {children}
        <FooterContainer generalLayout={generalLayout} />
      </body>
    </html>
  )
}

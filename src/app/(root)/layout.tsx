import { NavbarContainer } from "@/components/layout/Nav/NavbarContainer"
import { FooterContainer } from "@/components/layout/Footer/FooterContainer"
import { getGeneralLayout } from "@/sanity/queries/GeneralLayout/GeneraLayout"
import Script from "next/script"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const generalLayout = await getGeneralLayout()
  return (
    <>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="sn1RFrXVBFoWytPCSPdhfQ"
        strategy="afterInteractive"
      />
      <NavbarContainer logo={generalLayout.logo} />
      {children}
      <FooterContainer generalLayout={generalLayout} />
    </>
  )
}

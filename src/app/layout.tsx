import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./global.css"
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/buildMetadata"

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Fuerza del Pueblo — Verón–Punta Cana. Noticias, eventos y formas de unirte al movimiento.",
  openGraph: {
    type: "website",
    locale: "es_DO",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: SITE_NAME,
    description:
      "Fuerza del Pueblo — Verón–Punta Cana. Noticias, eventos y formas de unirte al movimiento.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Fuerza del Pueblo — Verón–Punta Cana. Noticias, eventos y formas de unirte al movimiento.",
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}

import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";

import { Montserrat, Open_Sans } from 'next/font/google';
import { NavbarContainer } from "@/components/layout/Nav/NavbarContainer";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Fuerza del Pueblo",
  description: "Fuerza del Pueblo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
        {/* <Navbar showCandidates={false} /> */}
         <NavbarContainer />
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { I18nProvider } from "@/lib/i18n"
import "./globals.css"

export const metadata: Metadata = {
  title: "NOIRVAEL - Forged in Silence",
  description:
    "Entrenamiento personalizado, planes nutricionales, suplementos premium y ropa deportiva exclusiva. Tu marca de estilo de vida fitness.",
  generator: "v0.app",
  icons: {
    icon: "/NOIRVAEL/NOIRVAEL6.png",
    apple: "/NOIRVAEL/NOIRVAEL6.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <I18nProvider>
            {children}
          </I18nProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

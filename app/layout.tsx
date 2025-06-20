import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

const supportedLocales = (process.env.NEXT_PUBLIC_SUPPORTED_LOCALES || "en,te,hi").split(",")

export const metadata: Metadata = {
  title: {
    default: "Vgrow-Careers Consultancy - Study in India & Abroad",
    template: "%s | Vgrow-Careers Consultancy",
  },
  description:
    "Premier education consultancy helping students pursue higher education in India, USA, UK, Germany, Japan, and Australia. Expert guidance for university admissions, scholarships, and career counseling.",
  keywords:
    "education consultancy, study abroad, universities, scholarships, admissions, India, USA, UK, Germany, Japan, Australia",
  authors: [{ name: "Vgrow-Careers Consultancy" }],
  openGraph: {
    title: "Vgrow-Careers Consultancy - Study in India & Abroad",
    description: "Premier education consultancy helping students pursue higher education worldwide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vgrow-Careers Consultancy - Study in India & Abroad",
    description: "Premier education consultancy helping students pursue higher education worldwide",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {/* Language/Region Toggle */}
        <div className="flex justify-end px-4 py-2">
          <select className="border rounded px-2 py-1" defaultValue={supportedLocales[0]}>
            {supportedLocales.map((locale) => (
              <option key={locale} value={locale}>
                {locale === "en" ? "English" : locale === "te" ? "తెలుగు" : locale === "hi" ? "हिंदी" : locale}
              </option>
            ))}
          </select>
        </div>
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

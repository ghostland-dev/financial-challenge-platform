import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "FinChallenge - Challenges financiers gamifiés",
    template: "%s | FinChallenge",
  },
  description:
    "Plateforme de challenges financiers gamifiés pour développer vos compétences et atteindre vos objectifs",
  keywords: [
    "finance",
    "challenges",
    "gamification",
    "apprentissage",
    "investissement",
    "crypto",
    "e-commerce",
    "affiliation",
  ],
  authors: [{ name: "FinChallenge Team" }],
  creator: "FinChallenge",
  publisher: "FinChallenge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}


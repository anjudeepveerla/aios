import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexaaios.com"),
  title: {
    default: "nexa AIOS | The Enterprise AI Operating System",
    template: "%s | nexa AIOS",
  },
  description: "nexa AIOS is the next-generation enterprise intelligence platform that unifies AI agents, organizational knowledge, workflow automation, and business applications into one secure, scalable operating system.",
  keywords: [
    "nexa AIOS",
    "nexaAIOS",
    "AI Operating System",
    "Enterprise AI",
    "AI Agents",
    "Workflow Automation",
    "Enterprise Intelligence",
    "Cognitive Kernel",
    "AI Integration Layer",
  ],
  authors: [{ name: "nexa AIOS Team" }],
  creator: "nexa AIOS",
  publisher: "nexa AIOS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.nexaaios.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nexaaios.com",
    title: "nexa AIOS | The Enterprise AI Operating System",
    description: "Unify your organization's intelligence. nexa AIOS orchestrates autonomous agents, secures corporate knowledge bases, and automates complex cross-app workflows in one secure kernel.",
    siteName: "nexa AIOS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "nexa AIOS - The Enterprise AI Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nexa AIOS | The Enterprise AI Operating System",
    description: "Unify your organization's intelligence. nexa AIOS orchestrates autonomous agents, secures corporate knowledge bases, and automates complex cross-app workflows in one secure kernel.",
    images: ["/og-image.jpg"],
    creator: "@nexa_aios",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

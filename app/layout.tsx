import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Easely | Understand Your Mind",
  description: "Consumer EEG technology that makes brain-computer interfaces accessible to everyone.",
  generator: 'v0.app',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://easely.com'),
  openGraph: {
    title: "Easely | Understand Your Mind",
    description: "Consumer EEG technology that makes brain-computer interfaces accessible to everyone.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://easely.com',
    siteName: "Easely",
    images: [
      {
        url: '/og-image.png', // Add your Open Graph image at /public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Easely - Understand Your Mind',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Easely | Understand Your Mind",
    description: "Consumer EEG technology that makes brain-computer interfaces accessible to everyone.",
    images: ['/og-image.png'], // Add your Twitter Card image at /public/og-image.png
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
</body>
    </html>
  )
}

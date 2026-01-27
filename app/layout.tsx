import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easely.com'

export const metadata: Metadata = {
  title: "Easely | Understand Your Mind",
  description: "Consumer EEG technology that makes brain-computer interfaces accessible to everyone.",
  generator: 'v0.app',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Easely | Understand Your Mind",
    description: "Consumer EEG technology that makes brain-computer interfaces accessible to everyone.",
    url: siteUrl,
    siteName: "Easely",
    images: [
      {
        url: `${siteUrl}/og-image.jpeg`,
        width: 1024,
        height: 1024,
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
    images: [`${siteUrl}/og-image.jpeg`],
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

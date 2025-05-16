import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MVP Studio",
  description: "Build MVPs That Dominate and Grow",
  openGraph: {
    title: "MVP Studio",
    description: "Build MVPs That Dominate and Grow",
    url: "https://mvpstudio.in, http://localhost:3000",
    siteName: "MVP Studio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MVP Studio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Studio",
    description: "Build MVPs That Dominate and Grow",
    images: ["/og.png"],
  },
  metadataBase: new URL('https://mvpstudio.in'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="MVP Studio" />
        <meta property="og:description" content="Build MVPs That Dominate and Grow" />
        <meta property="og:url" content="https://mvpstudio.in" />
        <meta property="og:site_name" content="MVP Studio" />
        <meta property="og:image" content="https://mvpstudio.in/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MVP Studio" />
        <meta name="twitter:description" content="Build MVPs That Dominate and Grow" />
        <meta name="twitter:image" content="https://mvpstudio.in/og.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
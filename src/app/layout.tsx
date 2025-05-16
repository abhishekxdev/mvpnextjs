import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MVP Studio",
  description: "Build MVPs That Dominate and Grow",
  openGraph: {
    title: "MVP Studio",
    description: "Build MVPs That Dominate and Grow",
    url: "https://mvpstudio.com, http://localhost:3000",
    siteName: "MVP Studio",
    images: [
      {
        url: "/images/MockupMVP@.jpg",
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
    images: ["/images/MockupMVP@.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
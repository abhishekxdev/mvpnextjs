import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MVP Studio - Build MVPs That Dominate and Grow',
  description: 'Launch with confidence — we develop MVPs across Web, Mobile, and AI to help you validate before scaling.',
  openGraph: {
    title: 'MVP Studio - Build MVPs That Dominate and Grow',
    description: 'Launch with confidence — we develop MVPs across Web, Mobile, and AI to help you validate before scaling.',
    url: 'https://mvpstudio.com',
    siteName: 'MVP Studio',
    images: [
      {
        url: '/images/MockupMVP@.jpg',
        width: 1200,
        height: 630,
        alt: 'MVP Studio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Studio - Build MVPs That Dominate and Grow',
    description: 'Launch with confidence — we develop MVPs across Web, Mobile, and AI to help you validate before scaling.',
    images: ['/images/MockupMVP@.jpg'],
    creator: '@abhishekxdev',
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
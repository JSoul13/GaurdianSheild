import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guardian Shield Inc. | Private Investigation & Security Services',
  description: 'Discreet protection, security & investigation solutions for modern risks. Full-service investigative firm providing confidential case resolution, digital forensics, executive protection, and corporate security consulting.',
  keywords: ['private investigation', 'security services', 'digital forensics', 'executive protection', 'corporate security', 'New York', 'NYC', 'Poughkeepsie'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Guardian Shield Inc. | Private Investigation & Security Services',
    description: 'Discreet protection, security & investigation solutions for modern risks.',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

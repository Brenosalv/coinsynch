import { Header } from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'CoinSynch',
  description: 'Your crypto wallet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header className={roboto.className} />
        {children}
        <Toaster />
      </body>
    </html>
  )
}

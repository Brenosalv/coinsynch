import { HomeFooter } from '@/components/layouts/HomeFooter'
import { HomeHeader } from '@/components/layouts/HomeHeader'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'CoinSynch',
  description: 'Your crypto world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <HomeHeader />
        {children}
        <HomeFooter />
        <Toaster />
      </body>
    </html>
  )
}

import { DashboardHeader } from '@/components/layouts/DashboardHeader'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'CoinSynch - Dashboard',
  description:
    'Dashboard for managing, buying and selling coins with your crypto wallet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <TooltipProvider>
          <DashboardHeader />
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}

import { DashboardFooter } from '@/components/layouts/DashboardFooter'
import { DashboardHeader } from '@/components/layouts/DashboardHeader'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ApiCryptoProvider } from '@/contexts/ApiCryptoContext'
import { WalletProvider } from '@/contexts/WalletContext'
import { cn } from '@/lib/utils'
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
      <body className={(cn(roboto.className), 'h-screen flex flex-col')}>
        <TooltipProvider>
          <ApiCryptoProvider>
            <WalletProvider>
              <DashboardHeader />
              {children}
              <DashboardFooter />
              <Toaster />
            </WalletProvider>
          </ApiCryptoProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}

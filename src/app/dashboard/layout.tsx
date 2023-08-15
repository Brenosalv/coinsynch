import { DashboardHeader } from '@/components/layouts/DashboardHeader'
import { Toaster } from '@/components/ui/toaster'
import { Roboto } from 'next/font/google'
import '../globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <DashboardHeader className={roboto.className} />
        {children}
        <Toaster />
      </body>
    </html>
  )
}

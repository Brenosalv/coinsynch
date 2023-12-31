import { Balance } from '@/components/dashboard/Balance'
import { DailyVariation } from '@/components/dashboard/DailyVariation'
import { MyWallet } from '@/components/dashboard/MyWallet'
import { NftsNews } from '@/components/dashboard/NftsNews'
import { SideBar } from '@/components/dashboard/SideBar'
import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function Dashboard() {
  return (
    <main className={cn(roboto.className, 'bg-gray-100 flex flex-1')}>
      <SideBar />

      <div className="m-16 max-sm:m-6 w-full flex flex-col gap-8">
        <div className="flex gap-8 max-sm:gap-4 flex-wrap h-fit">
          <Balance />

          <div className="flex gap-8 max-sm:gap-4 max-xl:w-full justify-center">
            <DailyVariation />
            <NftsNews />
          </div>
        </div>

        <MyWallet />
      </div>
    </main>
  )
}

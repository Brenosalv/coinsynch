import BalanceIcon from '@/assets/balance.svg'
import Image from 'next/image'

export function Balance() {
  return (
    <div className="flex shadow-lg rounded-lg h-28 max-sm:h-12 flex-1">
      <div className="px-6 max-sm:px-4 max-sm:py-2 pr-12 max-sm:pr-12 flex items-center gap-4 bg-white rounded-s-lg flex-1">
        <Image src={BalanceIcon} alt="" className="max-sm:w-8" />

        <div className="flex flex-col min-[640px]:whitespace-nowrap">
          <h4 className="font-normal text-2xl max-sm:text-sm mr-10 max-sm:mr-6">
            Balance{' '}
            <span className="max-sm:text-secondary-500 max-sm:text-xs">
              in US$
            </span>
          </h4>
          <p className="text-secondary-500 max-sm:hidden">(approximately)</p>
        </div>
      </div>
      <div className="px-14 max-sm:px-6 py-9 max-sm:py-3 bg-primary-100 rounded-e-lg text-center flex items-center justify-center font-bold text-3xl max-sm:text-base flex-1">
        <h3>$32,256.56</h3>
      </div>
    </div>
  )
}

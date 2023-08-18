'use client'

import EtheriumLogoIcon from '@/assets/etherium-logo.svg'
import GraphicImage from '@/assets/graphic-image.svg'
import { useApiCryptoContext } from '@/contexts/ApiCryptoContext'
import { cn } from '@/lib/utils'
import { getFormattedPriceChange } from '@/utils/getFormattedPriceChange'
import { getPriceChangeStyles } from '@/utils/priceChangeStyles'
import Image from 'next/image'

export function DailyVariation() {
  const { cryptos } = useApiCryptoContext()

  const etheriumCrypto = cryptos.find((crypto) => crypto.asset_id === 'ETH')

  return (
    <div className="flex flex-wrap shadow-lg rounded-lg w-1/2 max-sm:min-h-36 bg-white sm:h-28">
      <div className="flex flex-col w-1/3 max-sm:w-full p-2 max-sm:h-fit">
        <p className="text-secondary-500 text-xs whitespace-nowrap">
          Daily Variation
        </p>
        <div className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:gap-4 max-sm:text-center">
          <div className="flex gap-2 text-center mt-4 max-sm:mt-2 mb-2">
            <Image src={EtheriumLogoIcon} alt="" className="max-sm:w-4" />
            <span className="max-sm:text-xs">ETH</span>
          </div>
          <p
            className={cn(
              getPriceChangeStyles(etheriumCrypto?.price_change ?? 0),
              'max-sm:mt-2 max-sm:mb-2',
            )}
          >
            {getFormattedPriceChange(etheriumCrypto?.price_change ?? 0)}
          </p>
        </div>
      </div>

      <div className="w-2/3 max-sm:w-full rounded-e-lg sm:h-28">
        <Image
          src={GraphicImage}
          alt=""
          className="h-full w-full md:object-cover"
        />
      </div>
    </div>
  )
}

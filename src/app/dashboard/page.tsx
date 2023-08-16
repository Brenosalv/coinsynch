import BalanceIcon from '@/assets/balance.svg'
import EduphantsImage from '@/assets/eduphants.png'
import EtheriumLogoIcon from '@/assets/etherium-logo.svg'
import GraphicImage from '@/assets/graphic-image.svg'
import { SideBar } from '@/components/SideBar'
import Image from 'next/image'

export default function Dashboard() {
  return (
    <main className="bg-gray-100 flex mt-20 h-screen w-full">
      <SideBar />

      <div className="m-16 max-sm:m-6 w-full flex gap-8 max-sm:gap-4 flex-wrap h-fit">
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
              <p className="text-secondary-500 max-sm:hidden">
                (approximately)
              </p>
            </div>
          </div>
          <div className="px-14 max-sm:px-6 py-9 max-sm:py-3 bg-primary-100 rounded-e-lg text-center flex items-center justify-center font-bold text-3xl max-sm:text-base flex-1">
            <h3>$32,256.56</h3>
          </div>
        </div>

        <div className="flex gap-8 max-sm:gap-4 max-xl:w-full justify-center">
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
                <p className="text-terniary-700 max-sm:mt-2 max-sm:mb-2">
                  +5,65%
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

          <div className="flex flex-wrap shadow-lg rounded-lg w-1/2 max-sm:min-h-36 bg-white sm:h-28">
            <div className="flex flex-col w-1/2 max-sm:w-full p-4 max-sm:p-2 max-sm:h-20">
              <p className="font-bold text-sm max-sm:text-xs">NFT&#39;s NEWS</p>
              <p className="text-xs text-secondary-500 mt-[5px] mb-4 max-md:mb-0 max-sm:text-xs">
                New ElephantX NFT to be lauched!
              </p>
              <p className="text-xs text-primary-400 max-sm:hidden">
                Read more +
              </p>
            </div>

            <div className="w-1/2 max-sm:w-full rounded-e-lg max-sm:rounded-b-lg sm:h-28">
              <Image
                src={EduphantsImage}
                alt="Eduphant's picture"
                layout="responsive"
                className="rounded-e-lg max-sm:rounded-b-lg max-sm:rounded-tr-none sm:max-h-28 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

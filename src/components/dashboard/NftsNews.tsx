import EduphantsImage from '@/assets/eduphants.svg'
import Image from 'next/image'

export function NftsNews() {
  return (
    <div className="flex flex-wrap shadow-lg rounded-lg w-1/2 max-sm:min-h-36 bg-white sm:h-28">
      <div className="flex flex-col w-1/2 max-sm:w-full p-4 max-sm:p-2 max-sm:h-20">
        <p className="font-bold text-sm max-sm:text-xs">NFT&#39;s NEWS</p>
        <p className="text-xs text-secondary-500 mt-[5px] mb-4 max-md:mb-0 max-sm:text-xs">
          New ElephantX NFT to be lauched!
        </p>
        <p className="text-xs text-primary-400 max-sm:hidden">Read more +</p>
      </div>

      <div className="w-1/2 max-sm:w-full rounded-e-lg max-sm:rounded-b-lg md:h-28 flex">
        <Image
          src={EduphantsImage}
          alt="Eduphant's picture"
          layout="responsive"
          className="rounded-e-lg max-sm:rounded-b-lg max-sm:rounded-tr-none sm:max-h-28 object-cover"
        />
      </div>
    </div>
  )
}

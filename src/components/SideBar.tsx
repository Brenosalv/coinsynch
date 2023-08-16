import BitcoinIcon from '@/assets/bitcoin.svg'
import CircleIcon from '@/assets/circle.svg'
import GraphicIcon from '@/assets/graphic.svg'
import WalletIcon from '@/assets/wallet.svg'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Image from 'next/image'

export function SideBar() {
  return (
    <aside className="px-6 pt-12 bg-white w-fit border-t space-y-8 flex flex-col max-sm:hidden">
      <Tooltip>
        <TooltipTrigger>
          <Image
            className="cursor-pointer transform hover:scale-125 transition duration-150"
            src={WalletIcon}
            width={32}
            height={32}
            alt=""
          />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Lorem Ipsum</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Image
            className="cursor-pointer transform hover:scale-125 transition duration-150"
            src={CircleIcon}
            width={32}
            height={32}
            alt=""
          />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Lorem Ipsum</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Image
            className="cursor-pointer transform hover:scale-125 transition duration-150"
            src={BitcoinIcon}
            width={32}
            height={32}
            alt=""
          />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Lorem Ipsum</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Image
            className="cursor-pointer transform hover:scale-125 transition duration-150"
            src={GraphicIcon}
            width={32}
            height={32}
            alt=""
          />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Lorem Ipsum</p>
        </TooltipContent>
      </Tooltip>
    </aside>
  )
}

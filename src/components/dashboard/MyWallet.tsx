import EmptyIcon from '@/assets/empty.svg'
import PlusIcon from '@/assets/plus.svg'
import WalletIcon from '@/assets/wallet.svg'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import { AddCryptoForm } from '../forms/AddCryptoForm'
import { Button } from '../ui/button'

export function MyWallet() {
  return (
    <div className="shadow-lg max-sm:shadow-none max-sm:bg-transparent rounded-lg">
      <div className="flex items-center justify-between bg-white p-6 border-b max-sm:border-none max-sm:bg-gray-100 rounded-t-lg">
        <div className="flex items-center gap-4">
          <Image src={WalletIcon} alt="" className="max-sm:w-6" />
          <h4 className="font-bold text-2xl max-sm:text-xl">My Wallet</h4>
        </div>

        <Dialog>
          <DialogTrigger>
            <Button className="px-6 h-8 max-sm:h-8 max-sm:p-2.5 max-sm:text-2xl">
              <Image
                src={PlusIcon}
                alt=""
                className="text-lg leading-4 my-auto text-center"
              />
              <span className="max-sm:hidden ml-2">Add crypto</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col gap-[24px] p-[32px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mx-auto max-md:text-xl max-sm:text-base">
                Add Crypto
              </DialogTitle>
            </DialogHeader>

            <AddCryptoForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col items-center justify-center bg-white py-20 max-sm:py-10 max-sm:shadow-lg max-sm:rounded-lg rounded-b-lg">
        <Image src={EmptyIcon} alt="" />
        <h5 className="mt-6 mb-2 font-bold text-xl">Nothing here yet...</h5>
        <p className="text-sm">Add a crypto and start earning</p>
      </div>
    </div>
  )
}

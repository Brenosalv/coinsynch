'use client'

import { SignInForm } from '@/components/forms/SignInForm'
import { SignUpForm } from '@/components/forms/SignUpForm'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useApiCryptoContext } from '@/contexts/ApiCryptoContext'
import { formatCurrency } from '@/utils/formatCurrency'
import { getFormattedPriceChange } from '@/utils/getFormattedPriceChange'
import Image from 'next/image'
import { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import LogoImg from '../../assets/logo.svg'
import MenuIcon from '../../assets/menu.svg'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Link } from '../ui/link'

export function NavBar() {
  const signInButtonRef = useRef<HTMLButtonElement>(null)
  const signUpButtonRef = useRef<HTMLButtonElement>(null)

  const { cryptos } = useApiCryptoContext()

  function handleSignInButtonClick() {
    if (signInButtonRef.current) {
      signInButtonRef.current.click()
    }
  }

  function handleSignUpButtonClick() {
    if (signUpButtonRef.current) {
      signUpButtonRef.current.click()
    }
  }

  function handleAlternateAuthModals() {
    handleSignInButtonClick()
    handleSignUpButtonClick()
  }

  return (
    <nav className="flex-col">
      <div className="mx-[112px] max-sm:mx-[16px] max-md:mx-[48px] py-[11px] flex items-center justify-between">
        <Link href="#">
          <Image src={LogoImg} alt="Logo" height={21} />
        </Link>

        <div className="flex gap-[24px] ml-[40px] mr-auto max-sm:hidden">
          <Link href="#" className="whitespace-nowrap">
            About us
          </Link>
          <Link href="#" className="whitespace-nowrap">
            Top Cryptos
          </Link>
        </div>

        <div className="flex items-center gap-20">
          <div className="overflow-hidden max-w-[360px] max-xl:hidden">
            <Marquee loop={0} speed={25} className="max-w-[360px] ml-8">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.asset_id}
                  className="inline-block whitespace-nowrap mr-6 space-x-2"
                >
                  <span className="text-sm text-secondary">
                    {crypto.asset_id}
                  </span>
                  <span className="text-sm text-foreground">
                    {formatCurrency(crypto.price_usd)}
                  </span>
                  <span className="text-sm text-constructive">
                    {getFormattedPriceChange(crypto.price_change)}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>

          <div className="flex gap-[24px] max-sm:hidden">
            <Dialog>
              <DialogTrigger>
                <Button
                  id="signInButtonId"
                  variant="link"
                  className="p-0"
                  ref={signInButtonRef}
                >
                  Sign in
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col gap-[24px] p-[32px]">
                <DialogHeader>
                  <DialogTitle className="text-foreground text-2xl font-normal mx-auto max-md:text-xl max-sm:text-base">
                    Sign in to{' '}
                    <span className="text-primary text-2xl font-bold max-md:text-xl max-sm:text-base">
                      Coin
                    </span>{' '}
                    <span className="text-secondary-500 text-2xl font-bold max-md:text-xl max-sm:text-base">
                      Synch
                    </span>
                  </DialogTitle>
                </DialogHeader>

                <SignInForm />

                <DialogFooter className="mx-auto">
                  <p className="text-foreground text-sm font-normal">
                    <span className="max-sm:hidden">
                      Don&apos;t have an account?{' '}
                    </span>
                    <Link
                      href="#"
                      isFontBold
                      onClick={handleAlternateAuthModals}
                    >
                      Sign up to
                    </Link>{' '}
                    <span className="text-primary-500 font-bold max-sm:text-xs text-sm max-sm:leading-[0.75rem]">
                      Coin
                    </span>
                    <span className="text-secondary-500 font-bold max-sm:text-xs text-sm max-sm:leading-[0.75rem]">
                      Synch
                    </span>
                  </p>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <Button
                  id="signUpButtonId"
                  className="py-[8px] px-[16px] h-8"
                  ref={signUpButtonRef}
                >
                  <span className="mx-[17px]">Sign up</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col gap-[24px] p-[32px]">
                <DialogHeader>
                  <DialogTitle className="text-foreground text-2xl font-normal mx-auto max-md:text-xl max-sm:text-base">
                    Sign up to{' '}
                    <span className="text-primary text-2xl font-bold max-md:text-xl max-sm:text-base">
                      Coin
                    </span>{' '}
                    <span className="text-secondary-500 text-2xl font-bold max-md:text-xl max-sm:text-base">
                      Synch
                    </span>
                  </DialogTitle>
                </DialogHeader>

                <SignUpForm />

                <DialogFooter className="mx-auto">
                  <p className="text-foreground text-sm font-normal">
                    <span className="max-sm:hidden">
                      Already have an account?{' '}
                    </span>
                    <Link
                      href="#"
                      isFontBold
                      onClick={handleAlternateAuthModals}
                    >
                      Sign in to
                    </Link>{' '}
                    <span className="text-primary-500 font-bold max-sm:text-xs text-sm max-sm:leading-[0.75rem]">
                      Coin
                    </span>
                    <span className="text-secondary-500 font-bold max-sm:text-xs text-sm max-sm:leading-[0.75rem]">
                      Synch
                    </span>
                  </p>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Sheet>
            <SheetTrigger className="min-[640px]:hidden">
              <Image src={MenuIcon} alt="Menu" width={24} height={24} />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-8 items-end pt-8">
                <Link href="#">About us</Link>
                <Link href="#">Top Cryptos</Link>
                <Link href="#" onClick={handleSignInButtonClick}>
                  Sign in
                </Link>
                <Link href="#" onClick={handleSignUpButtonClick}>
                  Sign up
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="py-[5px] flex items-center justify-center shadow-lg border-t border-secondary-200 xl:hidden">
        <Marquee loop={0} speed={25} className="max-w-[360px]">
          {cryptos.map((crypto) => (
            <div
              key={crypto.asset_id}
              className="inline-block whitespace-nowrap mr-7 space-x-2"
            >
              <span className="text-sm text-secondary">{crypto.asset_id}</span>
              <span className="text-sm text-foreground">
                {formatCurrency(crypto.price_usd)}
              </span>
              <span className="text-sm text-constructive">
                {getFormattedPriceChange(crypto.price_change)}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </nav>
  )
}

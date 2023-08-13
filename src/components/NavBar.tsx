'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { useRef } from 'react'
import LogoImg from '../assets/logo.svg'
import MenuIcon from '../assets/menu.svg'
import { SignInForm } from './Forms/SignInForm'
import { SignUpForm } from './Forms/SignUpForm'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Link } from './ui/link'

export function NavBar() {
  const signInButtonRef = useRef<HTMLButtonElement>(null)
  const signUpButtonRef = useRef<HTMLButtonElement>(null)

  function handleAlternateAuthModals() {
    if (signInButtonRef.current) {
      signInButtonRef.current.click()
    }
    if (signUpButtonRef.current) {
      signUpButtonRef.current.click()
    }
  }

  return (
    <nav className="flex-col">
      <div className="mx-[112px] max-sm:mx-[16px] max-md:mx-[48px] py-[11px] flex items-center justify-between">
        <Link href="#">
          <Image src={LogoImg} alt="Logo" height={21} />
        </Link>

        <div className="flex gap-[24px] ml-[40px] mr-auto max-sm:hidden">
          <Link href="#">About us</Link>
          <Link href="#">Top Cryptos</Link>
        </div>

        <div className="flex items-center gap-[80px]">
          <div className="pl-[16px] flex gap-[8px] max-[1024px]:hidden">
            <span className="text-sm text-secondary">BIT</span>
            <span className="text-sm text-foreground">R$23,62</span>
            <span className="text-sm text-constructive">+7,082</span>
          </div>

          <div className="flex gap-[24px] max-sm:hidden">
            <Dialog>
              <DialogTrigger>
                <Button variant="link" className="p-0" ref={signInButtonRef}>
                  Sign in
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col gap-[24px] p-[32px]">
                <DialogHeader>
                  <DialogTitle className="text-foreground text-2xl font-normal mx-auto">
                    Sign in to{' '}
                    <span className="text-primary text-2xl font-bold">
                      Coin
                    </span>{' '}
                    <span className="text-secondary-500 text-2xl font-bold">
                      Synch
                    </span>
                  </DialogTitle>
                </DialogHeader>

                <SignInForm />

                <DialogFooter className="mx-auto">
                  <p className="text-foreground text-sm font-normal">
                    Don&apos;t have an account?{' '}
                    <Link
                      href="#"
                      isFontBold
                      onClick={handleAlternateAuthModals}
                    >
                      Sign up to
                    </Link>{' '}
                    <span className="text-primary-500 font-bold">Coin</span>
                    <span className="text-secondary-500 font-bold">Synch</span>
                  </p>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <Button className="py-[8px] px-[16px]" ref={signUpButtonRef}>
                  <span className="mx-[17px]">Sign up</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col gap-[24px] p-[32px]">
                <DialogHeader>
                  <DialogTitle className="text-foreground text-2xl font-normal mx-auto">
                    Sign up to{' '}
                    <span className="text-primary text-2xl font-bold">
                      Coin
                    </span>{' '}
                    <span className="text-secondary-500 text-2xl font-bold">
                      Synch
                    </span>
                  </DialogTitle>
                </DialogHeader>

                <SignUpForm />

                <DialogFooter className="mx-auto">
                  <p className="text-foreground text-sm font-normal">
                    Already have an account?{' '}
                    <Link
                      href="#"
                      isFontBold
                      onClick={handleAlternateAuthModals}
                    >
                      Sign in to
                    </Link>{' '}
                    <span className="text-primary-500 font-bold">Coin</span>
                    <span className="text-secondary-500 font-bold">Synch</span>
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
                <Link href="#">Sign in</Link>
                <Link href="#">Sign up</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="pl-[8px] py-[5px] flex gap-[8px] items-center justify-center w-full shadow-lg border-t border-secondary-200 min-[1024px]:hidden">
        <span className="text-sm text-secondary">BIT</span>
        <span className="text-sm text-foreground">R$23,62</span>
        <span className="text-sm text-constructive">+7,082</span>
      </div>
    </nav>
  )
}

import { cn } from '@/lib/utils'
import Link, { LinkProps as LinkFromNextProps } from 'next/link'
import { ReactNode } from 'react'

interface LinkProps extends LinkFromNextProps {
  children: string | ReactNode
  isFontBold?: boolean
}

function LinkFromNext({ children, isFontBold }: LinkProps) {
  return (
    <Link
      href="#"
      className={cn(
        'max-sm:text-lg text-sm leading-4 text-foreground underline-offset-4 hover:underline',
        isFontBold && 'font-bold',
      )}
    >
      {children}
    </Link>
  )
}

export { LinkFromNext as Link }

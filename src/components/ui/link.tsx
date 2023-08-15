import { cn } from '@/lib/utils'
import Link, { LinkProps as LinkFromNextProps } from 'next/link'
import { ReactNode } from 'react'

interface LinkProps extends LinkFromNextProps {
  children: string | ReactNode
  isFontBold?: boolean
  className?: string
}

function LinkFromNext({ children, isFontBold, onClick, className }: LinkProps) {
  return (
    <Link
      href="#"
      className={cn(
        'max-sm:text-xs text-sm max-sm:leading-[0.75rem] leading-4 text-foreground underline-offset-4 hover:underline',
        isFontBold && 'font-bold',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export { LinkFromNext as Link }

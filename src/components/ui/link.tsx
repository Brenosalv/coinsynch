import Link, { LinkProps as LinkFromNextProps } from 'next/link'
import { ReactNode } from 'react'

interface LinkProps extends LinkFromNextProps {
  children: string | ReactNode
}

function LinkFromNext({ children }: LinkProps) {
  return (
    <Link
      href="#"
      className="max-sm:text-lg text-sm leading-4 text-foreground underline-offset-4 hover:underline"
    >
      {children}
    </Link>
  )
}

export { LinkFromNext as Link }

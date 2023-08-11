import { NavBar } from './NavBar'

interface HeaderProps {
  className: string | undefined
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <NavBar />
    </header>
  )
}

import { NavBar } from './NavBar'
interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <NavBar />
    </header>
  )
}

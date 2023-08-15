import { NavBar } from '../NavBar'

interface HomeHeaderProps {
  className?: string
}

export function HomeHeader({ className }: HomeHeaderProps) {
  return (
    <header className={className}>
      <NavBar />
    </header>
  )
}

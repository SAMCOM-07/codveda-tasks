import { HomeIcon, NotepadText, SettingsIcon } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"

const HamburgerMenu = () => {
  const activeHref = (useLocation().pathname)

  const navDetails = [
    {
      name: 'Dashboard',
      href: '/',
      icon: <HomeIcon size={18} />,
    },
    {
      name: 'Tasks',
      href: '/tasks',
      icon: <NotepadText size={18} />,
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: <SettingsIcon size={18} />,
    },

  ]
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-2 flex items-center justify-around z-20">
      {
        navDetails.map(nav =>
          <NavLink to={nav.href} className={cn('flex flex-col items-center gap-0.5 rounded-lg transition-all duration-300 text-sm', nav.href === activeHref ? 'text-primary' : 'text-foreground/70 hover:text-foreground')} key={nav.name}>
            {nav.icon}
            <span>{nav.name}</span>
          </NavLink>
        )
      }
    </nav>
  )
}

export default HamburgerMenu

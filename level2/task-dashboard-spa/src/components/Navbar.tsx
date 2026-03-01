import { useLocation } from "react-router-dom"
import ThemeToogle from "./ThemeToogle"

const Navbar = () => {

  const activeHref = (useLocation().pathname)

  return (
    <div className="bg-background border-b border-border p-4 flex items-center justify-between">
      <h1 className="text-xl tracking-wide font-bold text-primary/75">{activeHref === '/' ? 'Dashboard Overview' : activeHref === '/tasks' ? 'Manage Tasks' : 'Settings'}</h1>

      <ThemeToogle />
    </div>
  )
}

export default Navbar

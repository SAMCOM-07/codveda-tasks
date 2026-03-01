import { HomeIcon, NotebookPen, NotepadText, SettingsIcon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Sidebar() {

  const activeHref = (useLocation().pathname)

  const navDetails = [
    {
      name: 'Dashboard',
      href: '/',
      icon: <HomeIcon size={20} />,
    },
    {
      name: 'Tasks',
      href: '/tasks',
      icon: <NotepadText size={20} />,
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: <SettingsIcon size={20} />,
    },

  ]

  return (
    <div className="hidden md:block w-64 2xl:w-82 border-r border-border">
      <h1 className="text-2xl font-bold flex items-center gap-2 border-b border-border p-4"><NotebookPen size={36} className="inline rounded-full p-2 bg-primary/75 text-white" /><span>TaskManager</span></h1>

      <nav className="flex flex-col gap-2 p-4">
        {
          navDetails.map(nav =>
            <NavLink to={nav.href} className={cn('inline-flex items-center gap-3 p-1.5 px-2 rounded-lg transition-all duration-300 outline-ring',activeHref === nav.href ? 'bg-accent text-primary hover:bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-accent/40')} key={nav.name}>
              <span className="">{nav.icon}</span>
              {nav.name}
            </NavLink>
          ) 
        }
      </nav>
    </div>
  );
}
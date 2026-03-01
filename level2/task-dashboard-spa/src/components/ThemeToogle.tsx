import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"

const ThemeToggle = () => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </button>
  )
}

export default ThemeToggle
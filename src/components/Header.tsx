import { useState } from "react"

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Администрация", href: "#admin" },
  { label: "История", href: "#history" },
  { label: "Образование", href: "#education" },
  { label: "Предприятия", href: "#business" },
  { label: "Культура", href: "#culture" },
  { label: "Пассажиртранспорт", href: "#transport" },
  { label: "Природа", href: "#seasons" },
  { label: "Магазины", href: "#shops" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState("Главная")

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`px-4 py-4 text-sm transition-colors duration-200 border-b-2 whitespace-nowrap ${
                active === link.label
                  ? "border-foreground text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between h-14">
          <span className="text-sm font-medium text-foreground">Деревня Ключи</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Меню"
          >
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActive(link.label); setIsMenuOpen(false) }}
                className={`px-2 py-2 text-sm rounded transition-colors ${
                  active === link.label ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/destinos', label: 'Destinos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-lg font-bold text-white">
            A
          </span>
          <span className="text-xl font-bold tracking-tight text-brand-950">
            Aero<span className="text-brand-600">Trans</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-600 ${
                  isActive ? 'text-brand-600' : 'text-gray-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+56223456789"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-600"
          >
            <Phone className="h-4 w-4" />
            +56 2 2345 6789
          </a>
          <Button size="sm">Reservar ahora</Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:+56223456789"
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <Phone className="h-4 w-4" />
              +56 2 2345 6789
            </a>
            <Button className="w-full">Reservar ahora</Button>
          </div>
        </div>
      )}
    </header>
  )
}

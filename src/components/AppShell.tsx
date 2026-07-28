import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Entrada', path: '/' },
  { label: 'Procesando', path: '/procesando' },
  { label: '🟢 Verde', path: '/diagnostico/verde' },
  { label: '🟡 Amarillo', path: '/diagnostico/amarillo' },
  { label: '🔴 Rojo', path: '/diagnostico/rojo' },
  { label: 'Pago', path: '/pago' },
  { label: 'Entrega', path: '/entrega' },
  { label: 'Volver', path: '/volver' },
]

export function AppShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-background">
      {/* Prototype nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-1 overflow-x-auto">
          <span className="text-[10px] font-mono text-esmeralda mr-3 shrink-0">PROTOTIPO</span>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`shrink-0 text-[11px] px-2.5 py-1.5 rounded-lg transition-all ${
                pathname === item.path
                  ? 'bg-esmeralda/20 text-esmeralda font-medium'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="pt-14 min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
    </div>
  )
}

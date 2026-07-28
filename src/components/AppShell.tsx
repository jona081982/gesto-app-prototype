import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Entrada', path: '/' },
  { label: 'Procesando', path: '/procesando' },
  { label: 'Verde', path: '/diagnostico/verde' },
  { label: 'Amarillo', path: '/diagnostico/amarillo' },
  { label: 'Rojo', path: '/diagnostico/rojo' },
  { label: 'Pago', path: '/pago' },
  { label: 'Entrega', path: '/entrega' },
  { label: 'Volver', path: '/volver' },
]

export function AppShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-background">
      {/* App header with identity */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/logo-gestos-bv.png" alt="Gesto Copropiedad" className="h-16 w-auto" />
          </div>
          {/* Status dot */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-esmeralda animate-pulse" />
            <span className="text-[10px] text-white/30 font-mono">IA activa</span>
          </div>
        </div>
      </header>

      {/* Prototype nav (dev only) */}
      <nav className="fixed top-14 left-0 right-0 z-40 bg-surface/80 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-3 py-1.5 flex items-center gap-0.5 overflow-x-auto">
          <span className="text-[9px] font-mono text-esmeralda/40 mr-2 shrink-0">NAV DEV</span>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`shrink-0 text-[10px] px-2 py-1 rounded-md transition-all ${
                pathname === item.path
                  ? 'bg-esmeralda/15 text-esmeralda font-medium'
                  : 'text-white/30 hover:text-white/60 hover:bg-white/[0.03]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-esmeralda/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <main className="relative pt-28 min-h-screen flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
    </div>
  )
}

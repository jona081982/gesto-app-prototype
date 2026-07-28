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
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="aurora-bg" />

      {/* Decorative orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 rounded-full bg-esmeralda/[0.06] blur-[100px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-60 h-60 rounded-full bg-teal-500/[0.05] blur-[80px] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-lg mx-auto glass-card rounded-2xl px-5 h-16 flex items-center justify-between">
          <img src="/images/logo-gestos-bv.png" alt="Gesto Copropiedad" className="h-14 w-auto" />
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-esmeralda/[0.1] border border-esmeralda/25">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-esmeralda opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-esmeralda" />
            </span>
            <span className="text-[10px] text-esmeralda font-semibold">IA activa</span>
          </div>
        </div>
      </header>

      {/* Dev nav */}
      <nav className="fixed top-[88px] left-0 right-0 z-40 px-4">
        <div className="max-w-lg mx-auto bg-[#0C1220]/80 backdrop-blur-md rounded-xl border border-white/[0.06] px-2.5 py-1.5 flex items-center gap-0.5 overflow-x-auto">
          <span className="text-[7px] font-mono text-esmeralda/40 mr-1.5 shrink-0 uppercase tracking-widest">Dev</span>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`shrink-0 text-[9px] px-2 py-1 rounded-md transition-all ${
                pathname === item.path
                  ? 'bg-esmeralda/20 text-esmeralda font-semibold'
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 pt-36 min-h-screen flex items-start justify-center px-5 pb-16">
        <div className="w-full max-w-[420px]">
          {children}
        </div>
      </main>
    </div>
  )
}

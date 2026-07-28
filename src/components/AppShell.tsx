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
    <div className="min-h-screen bg-[#070B14] relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top glow */}
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-esmeralda/[0.04] rounded-full blur-[150px]" />
        {/* Grid subtle */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Bottom accent */}
        <div className="absolute -bottom-[100px] right-0 w-[400px] h-[400px] bg-esmeralda/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* App header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="max-w-lg mx-auto px-5 h-16 flex items-center justify-between">
            {/* Logo */}
            <img src="/images/logo-gestos-bv.png" alt="Gesto Copropiedad" className="h-8 w-auto" />
            {/* Status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-esmeralda/[0.08] border border-esmeralda/20">
              <span className="w-1.5 h-1.5 rounded-full bg-esmeralda animate-pulse" />
              <span className="text-[10px] text-esmeralda font-medium tracking-wide">IA activa</span>
            </div>
          </div>
        </div>
      </header>

      {/* Dev nav */}
      <nav className="fixed top-24 left-0 right-0 z-40">
        <div className="mx-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/[0.04] px-3 py-1.5 flex items-center gap-0.5 overflow-x-auto">
          <span className="text-[8px] font-mono text-esmeralda/30 mr-2 shrink-0 uppercase">Proto</span>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`shrink-0 text-[10px] px-2 py-1 rounded-md transition-all ${
                pathname === item.path
                  ? 'bg-esmeralda/15 text-esmeralda font-medium'
                  : 'text-white/25 hover:text-white/50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 pt-36 min-h-screen flex items-start justify-center px-5 pb-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
    </div>
  )
}

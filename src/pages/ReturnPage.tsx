import { motion } from 'framer-motion'
import { Search, ArrowRight, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function ReturnPage() {
  const navigate = useNavigate()
  const [found, setFound] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-white">¿Ya usaste Gesto antes?</h2>
        <p className="text-sm text-white/50">Ingresa tu email para encontrar tu caso</p>
      </div>

      {/* Email search */}
      <div className="space-y-3">
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full h-11 px-4 rounded-xl bg-surface border border-white/[0.08] text-white text-sm placeholder:text-white/30 focus:border-esmeralda/50 transition-all"
        />
        <button
          onClick={() => setFound(true)}
          className="w-full py-3 rounded-xl bg-surface border border-white/[0.08] hover:border-esmeralda/30 text-white/70 font-medium text-sm flex items-center justify-center gap-2 transition-all"
        >
          <Search size={14} />
          Buscar mi caso
        </button>
      </div>


      {/* Found case */}
      {found && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface rounded-xl border border-esmeralda/20 p-5 space-y-4"
        >
          <p className="text-[11px] font-mono text-esmeralda/60 uppercase tracking-wider">Caso encontrado</p>
          <div className="space-y-1">
            <p className="text-white/80 text-sm font-medium">Multa ilegal + cobro sin asamblea</p>
            <p className="text-white/40 text-[12px]">Condominio Las Araucarias, Providencia</p>
            <p className="text-white/30 text-[11px]">15 de julio de 2026</p>
          </div>
          <div className="space-y-2">
            <p className="text-white/50 text-sm">¿Vienes por el mismo tema?</p>
            <button className="w-full py-2.5 rounded-lg bg-esmeralda/10 border border-esmeralda/20 text-esmeralda text-sm font-medium hover:bg-esmeralda/20 transition-all">
              Sí, necesito escalar
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/50 text-sm hover:text-white/70 transition-all flex items-center justify-center gap-2"
            >
              <Plus size={13} />
              No, es algo nuevo
            </button>
          </div>
        </motion.div>
      )}

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/[0.06]" />
        </div>
        <div className="relative flex justify-center text-[11px]">
          <span className="bg-background px-3 text-white/20">o</span>
        </div>
      </div>

      {/* New user */}
      <button
        onClick={() => navigate('/')}
        className="w-full py-3 rounded-xl bg-esmeralda hover:bg-emerald-400 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
      >
        Comenzar diagnóstico gratis
        <ArrowRight size={15} />
      </button>
    </motion.div>
  )
}

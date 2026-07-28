import { motion } from 'framer-motion'
import { Lock, ArrowRight, CreditCard } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function PaymentPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-white">Último paso</h2>
        <p className="text-sm text-white/50">
          Ingresa tu email y paga para recibir tus documentos
        </p>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-[12px] text-white/40 font-medium">
          Tu email (para enviarte los documentos)
        </label>
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full h-11 px-4 rounded-xl bg-surface border border-white/[0.08] text-white text-sm placeholder:text-white/30 focus:border-esmeralda/50 transition-all"
        />
      </div>


      {/* Payment box */}
      <div className="bg-surface rounded-xl border border-white/[0.08] p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">Diagnóstico completo + documentos</span>
          <span className="text-white font-bold text-lg">$14.990</span>
        </div>
        <div className="border-t border-white/[0.06] pt-3 space-y-1.5 text-[12px] text-white/40">
          <p>✓ Informe legal detallado</p>
          <p>✓ Todos los documentos de tu caso</p>
          <p>✓ Guía de acción paso a paso</p>
          <p>✓ Escalamiento incluido 90 días</p>
        </div>

        {/* Simulated payment button */}
        <button
          onClick={() => navigate('/entrega')}
          className="w-full py-3.5 rounded-xl bg-esmeralda hover:bg-emerald-400 text-white font-semibold text-[15px] flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
        >
          <CreditCard size={16} />
          Pagar $14.990
        </button>
      </div>

      {/* Security */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-white/25">
        <Lock size={11} />
        <span>Pago seguro. No almacenamos datos de tarjeta.</span>
      </div>
    </motion.div>
  )
}

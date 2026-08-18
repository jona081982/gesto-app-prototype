import { motion } from 'framer-motion'
import { Lock, CreditCard } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function PaymentPage() {
  const navigate = useNavigate()
  const [consent, setConsent] = useState(false)

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
          className="w-full h-11 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-esmeralda/50 transition-all outline-none"
        />
      </div>

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/[0.04] text-esmeralda focus:ring-esmeralda/30 cursor-pointer"
        />
        <span className="text-[12px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
          Acepto que mis datos sean procesados con inteligencia artificial (DeepSeek) para generar los documentos de mi caso. Los datos se eliminan automáticamente en 30 días.
{' '}
          <a href="/privacidad" className="text-esmeralda/70 hover:text-esmeralda underline">Leer más</a>
        </span>
      </label>

      {/* Payment box */}
      <div className="bg-white/[0.03] rounded-2xl border border-white/[0.06] p-5 space-y-4">
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

        {/* Payment button — disabled if no consent */}
        <button
          onClick={() => consent && navigate('/entrega')}
          disabled={!consent}
          className={`w-full py-3.5 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 transition-all ${
            consent
              ? 'bg-esmeralda hover:bg-emerald-400 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)] cursor-pointer'
              : 'bg-white/[0.05] text-white/20 cursor-not-allowed'
          }`}
        >
          <CreditCard size={16} />
          Pagar $14.990
        </button>
      </div>

      {/* Security */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-white/20">
        <Lock size={11} />
        <span>Pago seguro. No almacenamos datos de tarjeta.</span>
      </div>
    </motion.div>
  )
}

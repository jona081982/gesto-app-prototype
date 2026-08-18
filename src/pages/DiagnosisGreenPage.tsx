import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GestoSymbol } from '../components/GestoSymbol'

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [target, duration])

  return <span>${count.toLocaleString('es-CL')}</span>
}

export function DiagnosisGreenPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      {/* Green reveal wave */}
      <motion.div
        className="fixed inset-0 bg-esmeralda/10 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Semáforo */}
      <div className="relative text-center space-y-3">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', delay: 0.2, duration: 0.8 }}
          className="w-20 h-20 rounded-full bg-esmeralda/10 flex items-center justify-center mx-auto relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-esmeralda/5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <CheckCircle size={36} className="text-esmeralda relative z-10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-esmeralda">Tienes caso</h2>
          <p className="text-sm text-white/50 mt-1">Irregularidades detectadas con fundamento legal</p>
        </motion.div>
      </div>

      {/* Resumen card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-surface rounded-2xl border border-esmeralda/20 p-5 space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-[11px] font-mono text-white/30 uppercase">Irregularidades</span>
            <p className="text-esmeralda font-bold text-2xl mt-0.5">3</p>
          </div>
          <div>
            <span className="text-[11px] font-mono text-white/30 uppercase">Gravedad</span>
            <p className="text-esmeralda font-semibold text-sm mt-1.5">Alta</p>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-3">
          <p className="text-white/70 text-[14px] leading-relaxed">
            "Tu multa no tiene base en el reglamento, el cobro extraordinario no fue aprobado en asamblea, y el administrador no ha rendido cuentas en más de un año."
          </p>
        </div>
        {/* Animated counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 pt-1 bg-esmeralda/[0.06] rounded-lg px-3 py-2"
        >
          <TrendingUp size={15} className="text-esmeralda" />
          <span className="text-esmeralda font-mono text-[15px] font-bold">
            ~<AnimatedCounter target={620000} />/año en juego
          </span>
        </motion.div>
      </motion.div>

      {/* Acción recomendada */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-surface rounded-2xl border border-white/[0.06] p-4 space-y-3"
      >
        <span className="text-[11px] font-mono text-white/30 uppercase tracking-wider">Documentos que recibirás</span>
        <div className="space-y-2">
          {['Carta de impugnación de multa', 'Solicitud de rendición de cuentas', 'Objeción a cobro extraordinario'].map((doc, i) => (
            <motion.div
              key={doc}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="flex items-center gap-2.5 text-[13px] text-white/60"
            >
              <span className="w-5 h-5 rounded bg-esmeralda/10 flex items-center justify-center text-[10px] text-esmeralda font-bold">{i + 1}</span>
              {doc}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What's included */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-esmeralda/[0.03] border border-esmeralda/10 rounded-2xl p-4"
      >
        <ul className="space-y-1.5 text-[12px] text-white/50">
          <li className="flex items-center gap-2"><Shield size={12} className="text-esmeralda" /> Informe legal detallado con artículos</li>
          <li className="flex items-center gap-2"><Shield size={12} className="text-esmeralda" /> 3 documentos listos para firmar</li>
          <li className="flex items-center gap-2"><Shield size={12} className="text-esmeralda" /> Guía paso a paso (a dónde ir, qué llevar)</li>
          <li className="flex items-center gap-2"><Shield size={12} className="text-esmeralda" /> Escalamiento incluido 90 días</li>
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <button
          onClick={() => navigate('/pago')}
          className="w-full py-3.5 rounded-2xl bg-esmeralda hover:bg-emerald-400 text-white font-semibold text-[15px] flex items-center justify-center gap-2 transition-all shadow-[0_4px_24px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_36px_rgba(16,185,129,0.45)] hover:-translate-y-[1px]"
        >
          Obtener documentos — $14.990
          <ArrowRight size={16} />
        </button>
        <p className="text-center text-[12px] text-white/25 mt-3">
          Hasta ~$620.000 en disputa por $14.990 · Sin suscripción obligatoria
        </p>
      </motion.div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function DiagnosisGreenPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      {/* Semáforo */}
      <div className="text-center space-y-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-esmeralda/15 flex items-center justify-center mx-auto"
        >
          <CheckCircle size={32} className="text-esmeralda" />
        </motion.div>
        <div>
          <h2 className="text-2xl font-bold text-esmeralda">Tienes caso</h2>
          <p className="text-sm text-white/50 mt-1">Se detectaron irregularidades con fundamento legal claro</p>
        </div>
      </div>

      {/* Resumen */}
      <div className="bg-surface rounded-xl border border-esmeralda/20 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-mono text-white/40 uppercase tracking-wider">Irregularidades</span>
          <span className="text-esmeralda font-bold text-lg">3</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-mono text-white/40 uppercase tracking-wider">Gravedad</span>
          <span className="text-esmeralda font-semibold text-sm">Alta</span>
        </div>
        <div className="border-t border-white/[0.06] pt-3">
          <p className="text-white/70 text-sm leading-relaxed">
            "Tu multa no tiene base en el reglamento, el cobro extraordinario no fue aprobado en asamblea, y el administrador no ha rendido cuentas en más de un año."
          </p>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <TrendingUp size={14} className="text-esmeralda" />
          <span className="text-esmeralda font-mono text-sm font-bold">~$620.000/año en juego</span>
        </div>
      </div>

      {/* Acción recomendada */}
      <div className="bg-surface rounded-xl border border-white/[0.06] p-4">
        <span className="text-[11px] font-mono text-white/30 uppercase tracking-wider">Acción recomendada</span>
        <div className="mt-2 space-y-1.5">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="w-5 h-5 rounded bg-esmeralda/10 flex items-center justify-center text-[10px] text-esmeralda font-bold">1</span>
            Carta de impugnación de multa
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="w-5 h-5 rounded bg-esmeralda/10 flex items-center justify-center text-[10px] text-esmeralda font-bold">2</span>
            Solicitud de rendición de cuentas
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="w-5 h-5 rounded bg-esmeralda/10 flex items-center justify-center text-[10px] text-esmeralda font-bold">3</span>
            Objeción a cobro extraordinario
          </div>
        </div>
      </div>

      {/* Lo que recibe */}
      <div className="bg-esmeralda/[0.04] border border-esmeralda/10 rounded-xl p-4">
        <p className="text-[11px] font-mono text-esmeralda/60 uppercase tracking-wider mb-2">Con tu pago recibes</p>
        <ul className="space-y-1.5 text-sm text-white/60">
          <li className="flex items-center gap-2"><Shield size={13} className="text-esmeralda" /> Informe legal detallado</li>
          <li className="flex items-center gap-2"><Shield size={13} className="text-esmeralda" /> 3 documentos listos para usar</li>
          <li className="flex items-center gap-2"><Shield size={13} className="text-esmeralda" /> Guía paso a paso</li>
          <li className="flex items-center gap-2"><Shield size={13} className="text-esmeralda" /> Escalamiento incluido 90 días</li>
        </ul>
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate('/pago')}
        className="w-full py-3.5 rounded-xl bg-esmeralda hover:bg-emerald-400 text-white font-semibold text-[15px] flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.45)]"
      >
        Obtener documentos — $14.990
        <ArrowRight size={16} />
      </button>

      <p className="text-center text-[12px] text-white/30">
        Recupera ~$620.000 por $14.990
      </p>
    </motion.div>
  )
}

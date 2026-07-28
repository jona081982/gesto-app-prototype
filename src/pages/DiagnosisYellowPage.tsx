import { motion } from 'framer-motion'
import { AlertCircle, Upload, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function DiagnosisYellowPage() {
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
          className="w-16 h-16 rounded-full bg-warning/15 flex items-center justify-center mx-auto"
        >
          <AlertCircle size={32} className="text-warning" />
        </motion.div>
        <div>
          <h2 className="text-2xl font-bold text-warning">Necesitamos más información</h2>
          <p className="text-sm text-white/50 mt-1">Hay indicios pero falta evidencia para confirmar</p>
        </div>
      </div>

      {/* Lo que necesita */}
      <div className="bg-surface rounded-xl border border-warning/20 p-5 space-y-4">
        <p className="text-[11px] font-mono text-warning/60 uppercase tracking-wider">Para completar el análisis necesitamos</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded bg-warning/10 flex items-center justify-center shrink-0 mt-0.5 text-[10px] text-warning font-bold">1</span>
            <span className="text-sm text-white/70">¿Recibiste una notificación escrita antes de que te aplicaran la multa?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded bg-warning/10 flex items-center justify-center shrink-0 mt-0.5 text-[10px] text-warning font-bold">2</span>
            <span className="text-sm text-white/70">¿Puedes subir una foto de la boleta de gasto común del mes anterior para comparar?</span>
          </li>
        </ul>
      </div>

      {/* Upload zone */}
      <div className="border border-dashed border-warning/20 rounded-xl p-5 text-center hover:border-warning/40 transition-colors cursor-pointer group">
        <Upload size={20} className="mx-auto text-white/30 group-hover:text-warning/60 transition-colors mb-2" />
        <p className="text-sm text-white/40">Subir documentos adicionales</p>
      </div>

      {/* Text area */}
      <textarea
        placeholder="Agrega información adicional aquí..."
        className="w-full h-24 px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-white text-sm placeholder:text-white/30 resize-none focus:border-warning/50 transition-all"
      />

      {/* CTA */}
      <button
        onClick={() => navigate('/procesando')}
        className="w-full py-3.5 rounded-xl bg-warning/90 hover:bg-warning text-white font-semibold text-[15px] flex items-center justify-center gap-2 transition-all"
      >
        Volver a analizar
        <ArrowRight size={16} />
      </button>

      <p className="text-center text-[11px] text-white/25">
        Sin costo. Puedes completar hasta que tengamos claridad.
      </p>
    </motion.div>
  )
}

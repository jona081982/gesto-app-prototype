import { motion } from 'framer-motion'
import { XCircle, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function DiagnosisRedPage() {
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
          className="w-16 h-16 rounded-full bg-alert/15 flex items-center justify-center mx-auto"
        >
          <XCircle size={32} className="text-alert" />
        </motion.div>
        <div>
          <h2 className="text-2xl font-bold text-white">No se detectan irregularidades</h2>
          <p className="text-sm text-white/50 mt-1">Con lo presentado, no hay fundamento legal para actuar</p>
        </div>
      </div>

      {/* Razón */}
      <div className="bg-surface rounded-xl border border-white/[0.06] p-5 space-y-3">
        <p className="text-[11px] font-mono text-white/30 uppercase tracking-wider">Razón</p>
        <p className="text-sm text-white/60 leading-relaxed">
          "La multa que te aplicaron sí está contemplada en el artículo 12 de tu reglamento de copropiedad, y consta que recibiste notificación previa el día 3 de junio, cumpliendo el debido proceso establecido en la Ley 21.442."
        </p>
      </div>

      {/* Costo */}
      <div className="bg-esmeralda/[0.04] border border-esmeralda/10 rounded-xl p-4 text-center">
        <p className="text-esmeralda font-bold text-lg">$0</p>
        <p className="text-white/40 text-sm">No te cobramos. Esto demuestra que somos honestos.</p>
      </div>

      {/* Opciones */}
      <div className="space-y-3">
        <p className="text-[12px] text-white/30 text-center">
          Si tienes información que no incluiste, puedes intentar de nuevo.
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-full py-3 rounded-xl bg-surface border border-white/[0.08] hover:border-white/20 text-white/60 font-medium text-sm flex items-center justify-center gap-2 transition-all"
        >
          <RotateCcw size={14} />
          Intentar con más información
        </button>
      </div>
    </motion.div>
  )
}

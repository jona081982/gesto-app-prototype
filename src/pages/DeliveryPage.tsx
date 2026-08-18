import { motion } from 'framer-motion'
import { CheckCircle, FileText, Download, Mail, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function DeliveryPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      {/* Success */}
      <div className="text-center space-y-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-esmeralda/15 flex items-center justify-center mx-auto"
        >
          <CheckCircle size={32} className="text-esmeralda" />
        </motion.div>
        <h2 className="text-2xl font-bold text-white">¡Listo!</h2>
        <p className="text-sm text-white/50">Tus documentos están listos</p>
      </div>


      {/* Documents */}
      <div className="space-y-2">
        {[
          'Informe de Diagnóstico Legal',
          'Carta de Impugnación de Multa',
          'Solicitud de Rendición de Cuentas',
          'Objeción a Cobro Extraordinario',
          'Guía de Acción',
        ].map((doc) => (
          <div key={doc} className="flex items-center justify-between bg-surface rounded-xl border border-white/[0.06] px-4 py-3">
            <div className="flex items-center gap-3">
              <FileText size={16} className="text-esmeralda" />
              <span className="text-sm text-white/70">{doc}</span>
            </div>
            <button className="text-esmeralda hover:text-emerald-400 transition-colors">
              <Download size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Email confirmation */}
      <div className="flex items-center gap-2 justify-center text-[12px] text-white/30">
        <Mail size={12} />
        <span>También enviados a tu.email@ejemplo.com</span>
      </div>

      {/* Escalamiento */}
      <div className="bg-surface rounded-xl border border-white/[0.06] p-4 text-center">
        <p className="text-sm text-white/50">
          Si te ignoran, vuelve con tu email en los próximos 90 días y escalamos sin costo.
        </p>
      </div>

      {/* Suscripción */}
      <div className="bg-esmeralda/[0.05] border border-esmeralda/20 rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-esmeralda" />
          <span className="font-bold text-white">Protección Gestos</span>
        </div>
        <p className="text-sm text-white/60">
          Primer mes <span className="text-esmeralda font-bold">GRATIS</span>. Después $4.990/mes. Cancela cuando quieras.
        </p>
        <ul className="space-y-1.5 text-[12px] text-white/50">
          <li>✓ Casos nuevos ilimitados</li>
          <li>✓ Auditoría mensual de tu boleta</li>
          <li>✓ Alertas si tu administrador incumple</li>
          <li>✓ Prioridad de procesamiento</li>
        </ul>
        <button className="w-full py-3 rounded-xl bg-esmeralda hover:bg-emerald-400 text-white font-semibold text-sm transition-all">
          Activar protección — primer mes gratis
        </button>
        <button className="w-full py-2 text-white/30 text-[12px] hover:text-white/50 transition-colors">
          No, gracias
        </button>
      </div>
    </motion.div>
  )
}

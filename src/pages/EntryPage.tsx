import { motion } from 'framer-motion'
import { Upload, MapPin, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function EntryPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-esmeralda/10 border border-esmeralda/20">
          <span className="w-1.5 h-1.5 rounded-full bg-esmeralda animate-pulse" />
          <span className="text-[10px] font-mono text-esmeralda uppercase tracking-wider">Gesto Copropiedad</span>
        </div>
        <h1 className="text-2xl font-bold text-white">
          ¿Qué te está pasando en tu edificio?
        </h1>
        <p className="text-white/50 text-sm">
          Cuéntanos con tus palabras. La IA analiza gratis.
        </p>
      </div>

      {/* Text input */}
      <div className="space-y-2">
        <textarea
          placeholder="Ejemplo: Me pusieron una multa de $80.000 por dejar la bicicleta en el pasillo, pero nunca me avisaron antes y en el reglamento no dice nada de eso..."
          className="w-full h-36 px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-white text-sm placeholder:text-white/30 resize-none focus:border-esmeralda/50 focus:ring-1 focus:ring-esmeralda/20 transition-all"
        />
      </div>

      {/* File upload */}
      <div className="border border-dashed border-white/[0.12] rounded-xl p-5 text-center hover:border-esmeralda/30 transition-colors cursor-pointer group">
        <Upload size={20} className="mx-auto text-white/30 group-hover:text-esmeralda/60 transition-colors mb-2" />
        <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
          Adjuntar evidencia <span className="text-white/25">(opcional)</span>
        </p>
        <p className="text-[11px] text-white/20 mt-1">
          Fotos de boletas, multas, avisos, capturas de WhatsApp
        </p>
      </div>

      {/* Comuna */}
      <div className="space-y-1.5">
        <label className="text-[12px] text-white/40 font-medium flex items-center gap-1.5">
          <MapPin size={12} />
          ¿En qué comuna está tu edificio?
        </label>
        <input
          type="text"
          placeholder="Ej: Providencia"
          className="w-full h-11 px-4 rounded-xl bg-surface border border-white/[0.08] text-white text-sm placeholder:text-white/30 focus:border-esmeralda/50 transition-all"
        />
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate('/procesando')}
        className="w-full h-13 py-3.5 rounded-xl bg-esmeralda hover:bg-emerald-400 text-white font-semibold text-[15px] flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.45)] hover:-translate-y-[1px]"
      >
        Analizar mi caso — GRATIS
        <ArrowRight size={16} />
      </button>

      <p className="text-center text-[11px] text-white/25">
        Sin tarjeta. Sin cuenta. Resultado en segundos.
      </p>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { Upload, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function EntryPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="space-y-7"
    >
      {/* Hero text */}
      <div className="text-center space-y-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-esmeralda/[0.08] border border-esmeralda/20"
        >
          <Sparkles size={12} className="text-esmeralda" />
          <span className="text-[11px] text-esmeralda font-medium">Análisis gratuito con IA</span>
        </motion.div>
        <h1 className="text-[26px] sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
          ¿Qué te está pasando<br />en tu edificio?
        </h1>
        <p className="text-[14px] text-white/40 max-w-xs mx-auto leading-relaxed">
          Describe tu situación. La IA analiza contra 9 cuerpos legales y te dice si tienes caso.
        </p>
      </div>

      {/* Input card */}
      <div className="rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] p-5 space-y-5 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
        {/* Text input */}
        <div className="space-y-2">
          <label className="text-[11px] text-white/30 font-medium uppercase tracking-wider">Tu situación</label>
          <textarea
            placeholder="Ejemplo: Me pusieron una multa de $80.000 por dejar la bicicleta en el pasillo, pero nunca me avisaron antes..."
            className="w-full h-32 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-[14px] placeholder:text-white/20 resize-none focus:border-esmeralda/40 focus:bg-white/[0.04] transition-all leading-relaxed"
          />
        </div>

        {/* File upload */}
        <div className="border border-dashed border-white/[0.1] rounded-xl p-4 text-center hover:border-esmeralda/30 hover:bg-esmeralda/[0.02] transition-all cursor-pointer group">
          <Upload size={18} className="mx-auto text-white/20 group-hover:text-esmeralda/60 transition-colors mb-1.5" />
          <p className="text-[12px] text-white/30 group-hover:text-white/50 transition-colors">
            Adjuntar evidencia <span className="text-white/15">(opcional)</span>
          </p>
          <p className="text-[10px] text-white/15 mt-0.5">
            Boletas, multas, capturas, reglamento
          </p>
        </div>

        {/* Comuna */}
        <div className="space-y-1.5">
          <label className="text-[11px] text-white/30 font-medium flex items-center gap-1.5 uppercase tracking-wider">
            <MapPin size={10} />
            Comuna del edificio
          </label>
          <input
            type="text"
            placeholder="Ej: Providencia"
            className="w-full h-11 px-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-[14px] placeholder:text-white/20 focus:border-esmeralda/40 transition-all"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-3">
        <button
          onClick={() => navigate('/procesando')}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-esmeralda to-emerald-400 text-white font-bold text-[15px] flex items-center justify-center gap-2.5 transition-all shadow-[0_6px_30px_rgba(16,185,129,0.25)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.35)] hover:-translate-y-[1px] active:translate-y-0"
        >
          Analizar mi caso — GRATIS
          <ArrowRight size={16} />
        </button>
        <p className="text-center text-[11px] text-white/20">
          Sin tarjeta · Sin cuenta · Resultado en segundos
        </p>
      </div>
    </motion.div>
  )
}

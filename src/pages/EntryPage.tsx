import { motion } from 'framer-motion'
import { Upload, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function EntryPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="space-y-8"
    >
      {/* Hero */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-esmeralda/[0.06] border border-esmeralda/15 backdrop-blur-sm"
        >
          <Sparkles size={11} className="text-esmeralda" />
          <span className="text-[11px] text-esmeralda/90 font-medium tracking-wide">Análisis gratuito con IA</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[28px] sm:text-[32px] font-extrabold text-white leading-[1.1] tracking-tight"
        >
          ¿Qué te está pasando<br />
          <span className="bg-gradient-to-r from-esmeralda to-emerald-300 bg-clip-text text-transparent">en tu edificio?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[14px] text-white/35 max-w-[320px] mx-auto leading-relaxed"
        >
          Describe tu situación. La IA analiza contra la ley y te dice si tienes caso.
        </motion.p>
      </div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card rounded-3xl p-6 space-y-5"
      >
        {/* Textarea */}
        <div className="space-y-2">
          <label className="text-[10px] text-white/25 font-semibold uppercase tracking-[0.15em]">Tu situación</label>
          <textarea
            placeholder="Ejemplo: Me pusieron una multa de $80.000 por dejar la bicicleta en el pasillo, pero nunca me avisaron..."
            className="w-full h-36 px-4 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white text-[14px] placeholder:text-white/15 resize-none focus:border-esmeralda/30 focus:bg-white/[0.03] focus:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all leading-relaxed outline-none"
          />
        </div>

        {/* Upload */}
        <div className="border border-dashed border-white/[0.07] rounded-2xl p-5 text-center hover:border-esmeralda/20 hover:bg-esmeralda/[0.015] transition-all duration-500 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-3 group-hover:border-esmeralda/20 group-hover:bg-esmeralda/[0.05] transition-all">
            <Upload size={16} className="text-white/20 group-hover:text-esmeralda/70 transition-colors" />
          </div>
          <p className="text-[12px] text-white/25 group-hover:text-white/40 transition-colors">
            Adjuntar evidencia <span className="text-white/10">(opcional)</span>
          </p>
          <p className="text-[10px] text-white/10 mt-1">
            Boletas · Multas · Capturas · Reglamento
          </p>
        </div>

        {/* Comuna */}
        <div className="space-y-2">
          <label className="text-[10px] text-white/25 font-semibold flex items-center gap-1.5 uppercase tracking-[0.15em]">
            <MapPin size={9} />
            Comuna del edificio
          </label>
          <input
            type="text"
            placeholder="Ej: Providencia"
            className="w-full h-12 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white text-[14px] placeholder:text-white/15 focus:border-esmeralda/30 transition-all outline-none"
          />
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <button
          onClick={() => navigate('/procesando')}
          className="cta-glow w-full h-[56px] rounded-2xl bg-gradient-to-r from-esmeralda via-emerald-500 to-esmeralda text-white font-bold text-[15px] flex items-center justify-center gap-2.5 transition-all hover:-translate-y-[2px] active:translate-y-0"
        >
          Analizar mi caso — GRATIS
          <ArrowRight size={16} className="opacity-70" />
        </button>
        <p className="text-center text-[11px] text-white/15 tracking-wide">
          Sin tarjeta · Sin cuenta · Resultado en segundos
        </p>
      </motion.div>
    </motion.div>
  )
}

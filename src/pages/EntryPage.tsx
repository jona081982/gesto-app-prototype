import { motion, AnimatePresence } from 'framer-motion'
import { Upload, MapPin, ArrowRight, MessageSquare, Paperclip, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const steps = [
  { id: 'describe', label: 'Describe', color: 'from-esmeralda to-teal-400' },
  { id: 'evidencia', label: 'Evidencia', color: 'from-teal-400 to-cyan-400' },
  { id: 'ubicacion', label: 'Ubicación', color: 'from-cyan-400 to-esmeralda' },
]

export function EntryPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)

  const next = () => {
    if (step < 2) setStep(step + 1)
    else navigate('/procesando')
  }

  const back = () => {
    if (step > 0) setStep(step - 1)
  }

  return (
    <div className="min-h-[70vh] flex flex-col justify-between">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-500 ${
                i < step ? 'bg-esmeralda text-white' :
                i === step ? 'bg-esmeralda/20 text-esmeralda border-2 border-esmeralda' :
                'bg-white/[0.04] text-white/20 border border-white/[0.08]'
              }`}>
                {i < step ? <CheckCircle size={14} /> : i + 1}
              </div>
              {i < 2 && (
                <div className={`hidden sm:block w-16 h-0.5 rounded-full transition-all duration-500 ${
                  i < step ? 'bg-esmeralda' : 'bg-white/[0.06]'
                }`} />
              )}
            </div>
          ))}
        </div>
        {/* Bar */}
        <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-esmeralda to-teal-400"
            animate={{ width: `${((step + 1) / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 flex items-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="w-full space-y-6"
            >
              {/* Visual element */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-esmeralda/20 to-teal-400/10 border border-esmeralda/20 flex items-center justify-center mx-auto mb-5">
                  <MessageSquare size={28} className="text-esmeralda" />
                </div>
                <h2 className="text-[24px] sm:text-[28px] font-extrabold text-white leading-tight">
                  Cuéntanos qué te pasa
                </h2>
                <p className="text-[14px] text-white/40 mt-2 max-w-[300px] mx-auto">
                  Con tus palabras. Sin tecnicismos. La IA entiende.
                </p>
              </div>

              {/* Textarea */}
              <textarea
                placeholder="Me pusieron una multa de $80.000 por dejar la bicicleta en el pasillo, pero nunca me avisaron antes y en el reglamento no dice nada de eso..."
                className="w-full h-40 px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] placeholder:text-white/20 resize-none focus:border-esmeralda/40 focus:shadow-[0_0_30px_rgba(16,185,129,0.06)] transition-all leading-relaxed outline-none"
              />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="w-full space-y-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400/20 to-cyan-400/10 border border-teal-400/20 flex items-center justify-center mx-auto mb-5">
                  <Paperclip size={28} className="text-teal-400" />
                </div>
                <h2 className="text-[24px] sm:text-[28px] font-extrabold text-white leading-tight">
                  ¿Tienes evidencia?
                </h2>
                <p className="text-[14px] text-white/40 mt-2 max-w-[300px] mx-auto">
                  Fotos de boletas, multas, avisos o capturas de WhatsApp. Es opcional.
                </p>
              </div>

              {/* Upload zone — visually rich */}
              <div className="border-2 border-dashed border-white/[0.1] rounded-3xl p-10 text-center hover:border-esmeralda/30 hover:bg-esmeralda/[0.02] transition-all duration-500 cursor-pointer group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-esmeralda/10 to-teal-400/5 border border-white/[0.08] flex items-center justify-center mx-auto mb-4 group-hover:border-esmeralda/30 group-hover:scale-110 transition-all duration-500">
                  <Upload size={22} className="text-white/25 group-hover:text-esmeralda transition-colors" />
                </div>
                <p className="text-[14px] text-white/35 group-hover:text-white/60 transition-colors font-medium">
                  Toca para subir archivos
                </p>
                <p className="text-[11px] text-white/15 mt-2">
                  JPG · PNG · PDF · Máx 10MB cada uno
                </p>
              </div>

              <button
                onClick={next}
                className="w-full py-3 text-center text-[13px] text-white/30 hover:text-esmeralda transition-colors"
              >
                Omitir este paso →
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="w-full space-y-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-esmeralda/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-5">
                  <MapPin size={28} className="text-cyan-400" />
                </div>
                <h2 className="text-[24px] sm:text-[28px] font-extrabold text-white leading-tight">
                  ¿Dónde está tu edificio?
                </h2>
                <p className="text-[14px] text-white/40 mt-2 max-w-[300px] mx-auto">
                  Necesitamos la comuna para determinar el tribunal competente.
                </p>
              </div>

              {/* Input grande y claro */}
              <input
                type="text"
                placeholder="Ej: Providencia, Santiago, Las Condes..."
                className="w-full h-14 px-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-[16px] placeholder:text-white/20 focus:border-esmeralda/40 focus:shadow-[0_0_30px_rgba(16,185,129,0.06)] transition-all outline-none text-center"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 space-y-3">
        <button
          onClick={next}
          className="cta-glow w-full h-[56px] rounded-2xl bg-gradient-to-r from-esmeralda via-emerald-500 to-teal-500 text-white font-bold text-[15px] flex items-center justify-center gap-2.5 hover:-translate-y-[1px] active:translate-y-0 transition-transform"
        >
          {step < 2 ? 'Continuar' : 'Analizar mi caso — GRATIS'}
          <ArrowRight size={16} className="opacity-70" />
        </button>

        {step > 0 && (
          <button
            onClick={back}
            className="w-full py-2 text-[13px] text-white/25 hover:text-white/50 transition-colors"
          >
            ← Volver
          </button>
        )}

        {step === 0 && (
          <p className="text-center text-[11px] text-white/15 tracking-wide">
            Sin tarjeta · Sin cuenta · Resultado en segundos
          </p>
        )}
      </div>
    </div>
  )
}

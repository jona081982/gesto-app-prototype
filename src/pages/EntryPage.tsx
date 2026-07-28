import { motion, AnimatePresence } from 'framer-motion'
import { Upload, MapPin, ArrowRight, MessageSquare, Paperclip, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const steps = [
  { id: 'describe', label: 'Describe' },
  { id: 'evidencia', label: 'Evidencia' },
  { id: 'ubicacion', label: 'Ubicación' },
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
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-500 ${
                i < step ? 'bg-esmeralda text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' :
                i === step ? 'bg-esmeralda/20 text-esmeralda border-2 border-esmeralda shadow-[0_0_20px_rgba(16,185,129,0.2)]' :
                'bg-white/[0.05] text-white/30 border border-white/[0.1]'
              }`}>
                {i < step ? <CheckCircle size={15} /> : i + 1}
              </div>
              {i < 2 && (
                <div className={`w-10 h-0.5 rounded-full transition-all duration-500 ${
                  i < step ? 'bg-esmeralda shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-white/[0.08]'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
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
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-esmeralda to-teal-500 flex items-center justify-center mx-auto mb-5 shadow-[0_8px_30px_rgba(16,185,129,0.3)]">
                  <MessageSquare size={28} className="text-white" />
                </div>
                <h2 className="text-[26px] font-extrabold text-white leading-tight">
                  Cuéntanos qué te pasa
                </h2>
                <p className="text-[14px] text-white/50 mt-2">
                  Con tus palabras. Sin tecnicismos. La IA entiende.
                </p>
              </div>

              <textarea
                placeholder="Me pusieron una multa de $80.000 por dejar la bicicleta en el pasillo, pero nunca me avisaron antes y en el reglamento no dice nada de eso..."
                className="w-full h-40 px-5 py-4 rounded-2xl bg-white/[0.06] border border-white/[0.1] text-white text-[15px] placeholder:text-white/25 resize-none focus:border-esmeralda/50 focus:bg-white/[0.08] focus:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all leading-relaxed outline-none"
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mx-auto mb-5 shadow-[0_8px_30px_rgba(20,184,166,0.3)]">
                  <Paperclip size={28} className="text-white" />
                </div>
                <h2 className="text-[26px] font-extrabold text-white leading-tight">
                  ¿Tienes evidencia?
                </h2>
                <p className="text-[14px] text-white/50 mt-2">
                  Fotos de boletas, multas, avisos o capturas. Es opcional.
                </p>
              </div>

              <div className="border-2 border-dashed border-esmeralda/20 rounded-3xl p-10 text-center hover:border-esmeralda/40 hover:bg-esmeralda/[0.03] transition-all duration-500 cursor-pointer group">
                <div className="w-14 h-14 rounded-full bg-esmeralda/10 border border-esmeralda/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-esmeralda/20 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all duration-500">
                  <Upload size={22} className="text-esmeralda/60 group-hover:text-esmeralda transition-colors" />
                </div>
                <p className="text-[14px] text-white/40 group-hover:text-white/70 transition-colors font-medium">
                  Toca para subir archivos
                </p>
                <p className="text-[11px] text-white/20 mt-2">
                  JPG · PNG · PDF · Máx 10MB
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-esmeralda flex items-center justify-center mx-auto mb-5 shadow-[0_8px_30px_rgba(6,182,212,0.3)]">
                  <MapPin size={28} className="text-white" />
                </div>
                <h2 className="text-[26px] font-extrabold text-white leading-tight">
                  ¿Dónde está tu edificio?
                </h2>
                <p className="text-[14px] text-white/50 mt-2">
                  La comuna determina el tribunal competente.
                </p>
              </div>

              <input
                type="text"
                placeholder="Ej: Providencia, Santiago, Las Condes..."
                className="w-full h-14 px-5 rounded-2xl bg-white/[0.06] border border-white/[0.1] text-white text-[16px] placeholder:text-white/25 focus:border-esmeralda/50 focus:bg-white/[0.08] transition-all outline-none text-center"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="mt-8 space-y-3">
        <button
          onClick={next}
          className="cta-glow w-full h-[56px] rounded-2xl bg-gradient-to-r from-esmeralda via-emerald-500 to-teal-500 text-white font-bold text-[15px] flex items-center justify-center gap-2.5 hover:-translate-y-[2px] active:translate-y-0 transition-transform"
        >
          {step < 2 ? 'Continuar' : 'Analizar mi caso — GRATIS'}
          <ArrowRight size={16} />
        </button>

        {step > 0 && (
          <button
            onClick={back}
            className="w-full py-2 text-[13px] text-white/30 hover:text-white/60 transition-colors"
          >
            ← Volver
          </button>
        )}

        {step === 0 && (
          <p className="text-center text-[11px] text-white/20">
            Sin tarjeta · Sin cuenta · Resultado en segundos
            <br />
            <span className="text-white/15">Al enviar, aceptas los <a href="/terminos" className="text-esmeralda/50 hover:text-esmeralda underline">Términos</a> y la <a href="/privacidad" className="text-esmeralda/50 hover:text-esmeralda underline">Política de Privacidad</a>.</span>
          </p>
        )}
      </div>
    </div>
  )
}

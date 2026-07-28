import { motion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const steps = [
  'Leyendo tu descripción',
  'Analizando documentos',
  'Contrastando con la Ley 21.442',
  'Verificando artículos aplicables',
  'Evaluando evidencia',
]

export function ProcessingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval)
          setTimeout(() => navigate('/diagnostico/verde'), 800)
          return prev
        }
        return prev + 1
      })
    }, 1200)
    return () => clearInterval(interval)
  }, [navigate])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 text-center"
    >
      {/* Spinner */}
      <div className="relative w-20 h-20 mx-auto">
        <div className="absolute inset-0 rounded-full border-2 border-esmeralda/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-esmeralda animate-spin" />
        <div className="absolute inset-3 rounded-full bg-esmeralda/5 flex items-center justify-center">
          <Loader2 size={24} className="text-esmeralda animate-spin" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-1">Analizando tu caso</h2>
        <p className="text-sm text-white/40">Revisando contra 9 cuerpos legales</p>
      </div>

      {/* Steps */}
      <div className="text-left space-y-3 bg-surface rounded-xl p-5 border border-white/[0.06]">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: i <= currentStep ? 1 : 0.3, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="flex items-center gap-3"
          >
            {i < currentStep ? (
              <div className="w-5 h-5 rounded-full bg-esmeralda/20 flex items-center justify-center">
                <Check size={12} className="text-esmeralda" />
              </div>
            ) : i === currentStep ? (
              <div className="w-5 h-5 rounded-full bg-esmeralda/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-esmeralda animate-pulse" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-white/[0.04]" />
            )}
            <span className={`text-sm ${i <= currentStep ? 'text-white/70' : 'text-white/25'}`}>
              {step}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

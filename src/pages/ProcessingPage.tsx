import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const steps = [
  'Leyendo tu descripción',
  'Analizando documentos adjuntos',
  'Contrastando con la Ley 21.442',
  'Verificando artículos aplicables',
  'Evaluando suficiencia de evidencia',
]

export function ProcessingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval)
          setTimeout(() => navigate('/diagnostico/verde'), 1000)
          return prev
        }
        return prev + 1
      })
    }, 1400)
    return () => clearInterval(interval)
  }, [navigate])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10 text-center"
    >
      {/* Animated logo */}
      <div className="relative w-32 h-32 mx-auto">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-esmeralda/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute inset-3 rounded-full border border-esmeralda/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        {/* Pulse */}
        <motion.div
          className="absolute inset-6 rounded-full bg-esmeralda/[0.06]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src="/images/elemento-gestos-bv.png"
            alt=""
            className="w-20 h-20 object-contain"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Text */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-white mb-2"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Analizando tu caso
        </motion.h2>
        <p className="text-[13px] text-white/30">9 cuerpos legales · Ley 21.442 · DS 75 · JPL</p>
      </div>

      {/* Steps */}
      <div className="text-left rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-5 space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: i <= currentStep ? 1 : 0.15, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            {i < currentStep ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-5 h-5 rounded-full bg-esmeralda/20 flex items-center justify-center shrink-0"
              >
                <Check size={11} className="text-esmeralda" />
              </motion.div>
            ) : i === currentStep ? (
              <div className="w-5 h-5 rounded-full bg-esmeralda/10 flex items-center justify-center shrink-0">
                <motion.div
                  className="w-2 h-2 rounded-full bg-esmeralda"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-white/[0.03] shrink-0" />
            )}
            <span className={`text-[13px] ${i <= currentStep ? 'text-white/60' : 'text-white/15'} transition-colors`}>
              {step}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

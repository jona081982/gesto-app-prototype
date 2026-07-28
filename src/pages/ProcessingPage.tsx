import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GestoSymbol } from '../components/GestoSymbol'

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
      className="space-y-8 text-center"
    >
      {/* The "o" symbol as the main processing indicator */}
      <div className="relative w-24 h-24 mx-auto">
        {/* Orbiting ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-esmeralda/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-1 rounded-full border border-esmeralda/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        {/* Glow pulse */}
        <motion.div
          className="absolute inset-2 rounded-full bg-esmeralda/5"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Symbol centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <GestoSymbol size={40} animate={true} />
        </div>
      </div>

      <div>
        <motion.h2
          className="text-xl font-bold text-white mb-1"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Analizando tu caso
        </motion.h2>
        <p className="text-sm text-white/40">9 cuerpos legales · Ley 21.442 · DS 75 · JPL</p>
      </div>

      {/* Steps */}
      <div className="text-left space-y-2.5 bg-surface rounded-2xl p-5 border border-white/[0.06]">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: i <= currentStep ? 1 : 0.2, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="flex items-center gap-3"
          >
            {i < currentStep ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-5 h-5 rounded-full bg-esmeralda/20 flex items-center justify-center"
              >
                <Check size={11} className="text-esmeralda" />
              </motion.div>
            ) : i === currentStep ? (
              <div className="w-5 h-5 rounded-full bg-esmeralda/10 flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-esmeralda"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-white/[0.04]" />
            )}
            <span className={`text-[13px] ${i <= currentStep ? 'text-white/70' : 'text-white/20'} transition-colors`}>
              {step}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Subtle footer */}
      <motion.p
        className="text-[11px] text-white/20"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Verificación en tiempo real contra texto legal oficial
      </motion.p>
    </motion.div>
  )
}

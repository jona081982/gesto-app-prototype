import { motion } from 'framer-motion'
import { Upload, ArrowRight, MessageSquare, FileCheck, X, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

// Guía de evidencia útil (ADENDA_002 §6.1): no son categorías obligatorias, el usuario
// sube lo que tenga. Estos chips solo orientan sobre qué es útil adjuntar.
const evidenceHints = [
  'Boleta de gasto común',
  'Notificación de multa',
  'Reglamento de copropiedad',
  'Comunicados del comité',
  'Comprobantes de pago',
  'Fotos de daños/situaciones',
  'Conversaciones (WhatsApp, email)',
  'Actas de asamblea',
]

const MAX_FILES = 10
const MAX_FILE_SIZE_MB = 10
const ACCEPTED_FORMATS = '.jpg,.jpeg,.png,.webp,.pdf'

export function EntryPage() {
  const navigate = useNavigate()
  const [description, setDescription] = useState('')
  const [comuna, setComuna] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const isValid = description.length >= 50 && comuna.trim().length > 0

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const incoming = Array.from(e.target.files)
    const combined = [...files, ...incoming]

    if (combined.length > MAX_FILES) {
      setFileError(`Máximo ${MAX_FILES} archivos por caso.`)
      return
    }

    const tooLarge = incoming.find((f) => f.size > MAX_FILE_SIZE_MB * 1024 * 1024)
    if (tooLarge) {
      setFileError(`"${tooLarge.name}" supera ${MAX_FILE_SIZE_MB}MB. Sube un archivo más liviano.`)
      return
    }

    setFileError('')
    setFiles(combined)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
    setFileError('')
  }

  const handleSubmit = () => {
    if (!isValid) return
    navigate('/procesando', { state: { hasFiles: files.length > 0 } })
  }

  return (
    <div className="w-full space-y-6">
      {/* Header */}
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

      {/* Descripción */}
      <div className="space-y-1.5">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Me pusieron una multa de $80.000 por dejar la bicicleta en el pasillo, pero nunca me avisaron antes y en el reglamento no dice nada de eso..."
          className="w-full h-36 px-5 py-4 rounded-2xl bg-white/[0.06] border border-white/[0.1] text-white text-[15px] placeholder:text-white/25 resize-none focus:border-esmeralda/50 focus:bg-white/[0.08] focus:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all leading-relaxed outline-none"
        />
        <p className={`text-[12px] ${description.length >= 50 ? 'text-esmeralda' : 'text-white/25'}`}>
          {description.length < 50 ? `Mínimo 50 caracteres (${description.length}/50)` : `Listo · ${description.length} caracteres`}
        </p>
      </div>

      {/* Comuna */}
      <div className="space-y-1.5">
        <label className="text-[12px] text-white/40 font-medium px-1">
          ¿Dónde está tu edificio? (determina el tribunal competente)
        </label>
        <input
          type="text"
          value={comuna}
          onChange={(e) => setComuna(e.target.value)}
          placeholder="Ej: Providencia, Santiago, Las Condes..."
          className="w-full h-14 px-5 rounded-2xl bg-white/[0.06] border border-white/[0.1] text-white text-[15px] placeholder:text-white/25 focus:border-esmeralda/50 focus:bg-white/[0.08] transition-all outline-none"
        />
      </div>

      {/* Evidencia */}
      <div className="space-y-2.5">
        <label className="text-[12px] text-white/40 font-medium px-1">
          Evidencia (opcional, pero mejora el diagnóstico)
        </label>

        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED_FORMATS}
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-esmeralda/20 rounded-2xl p-6 text-center hover:border-esmeralda/40 hover:bg-esmeralda/[0.03] transition-all duration-500 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full bg-esmeralda/10 border border-esmeralda/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-esmeralda/20 group-hover:scale-110 transition-all duration-500">
            <Upload size={20} className="text-esmeralda/60 group-hover:text-esmeralda transition-colors" />
          </div>
          <p className="text-[14px] text-white/40 group-hover:text-white/70 transition-colors font-medium">
            Toca para subir fotos, boletas, multas, reglamento, capturas...
          </p>
          <p className="text-[11px] text-white/20 mt-1.5">
            JPG · PNG · WEBP · PDF · Máx {MAX_FILE_SIZE_MB}MB por archivo · Máx {MAX_FILES} archivos
          </p>
        </div>

        {/* Chips guía de tipos de evidencia útil */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {evidenceHints.map((hint) => (
            <span
              key={hint}
              className="text-[10.5px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/35"
            >
              {hint}
            </span>
          ))}
        </div>

        {/* Error de validación de archivos */}
        {fileError && (
          <div className="flex items-center gap-2 text-[12px] text-alert px-1">
            <AlertCircle size={13} />
            {fileError}
          </div>
        )}

        {/* Lista de archivos seleccionados */}
        {files.length > 0 && (
          <div className="space-y-1.5 pt-1">
            {files.map((file, i) => (
              <motion.div
                key={`${file.name}-${i}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between gap-2 bg-esmeralda/[0.06] border border-esmeralda/15 rounded-xl px-3 py-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <FileCheck size={14} className="text-esmeralda shrink-0" />
                  <span className="text-[12.5px] text-white/70 truncate">{file.name}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(i)
                  }}
                  className="text-white/30 hover:text-alert transition-colors shrink-0"
                >
                  <X size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="pt-2 space-y-3">
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`cta-glow w-full h-[56px] rounded-2xl font-bold text-[15px] flex items-center justify-center gap-2.5 transition-all ${
            isValid
              ? 'bg-gradient-to-r from-esmeralda via-emerald-500 to-teal-500 text-white hover:-translate-y-[2px] active:translate-y-0 cursor-pointer'
              : 'bg-white/[0.05] text-white/20 cursor-not-allowed'
          }`}
        >
          Analizar mi caso — GRATIS
          <ArrowRight size={16} />
        </button>

        <p className="text-center text-[11px] text-white/20">
          Sin tarjeta · Sin cuenta · Resultado en segundos
          <br />
          <span className="text-white/15">Al enviar, aceptas los <a href="/terminos" className="text-esmeralda/50 hover:text-esmeralda underline">Términos</a> y la <a href="/privacidad" className="text-esmeralda/50 hover:text-esmeralda underline">Política de Privacidad</a>.</span>
        </p>
      </div>
    </div>
  )
}

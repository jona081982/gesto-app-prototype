import { motion } from 'framer-motion'

interface GestoSymbolProps {
  size?: number
  color?: string
  animate?: boolean
  className?: string
}

/**
 * La "o" inteligente de Gestos — réplica exacta del logo real.
 * 
 * Forma real:
 * - Arco superior: CORTO y grueso, centrado arriba (como una ceja)
 * - Arco inferior: LARGO, envuelve desde abajo-izquierda hasta abajo-derecha,
 *   sus extremos suben a los costados (parece una C invertida o una U abierta)
 * - Punto central: grande y sólido
 * - NO hay barras laterales separadas
 */
export function GestoSymbol({ size = 36, color = '#10B981', animate = true, className = '' }: GestoSymbolProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.38
  const strokeWidth = size * 0.14
  const dotRadius = size * 0.13

  const toRad = (deg: number) => (deg * Math.PI) / 180
  const arcPoint = (angle: number) => ({
    x: cx + r * Math.cos(toRad(angle)),
    y: cy + r * Math.sin(toRad(angle)),
  })

  // Top arc: SHORT, only ~80° (from -140° to -40°) — like an eyebrow
  const topStart = arcPoint(-140)
  const topEnd = arcPoint(-40)
  const topPath = `M ${topStart.x} ${topStart.y} A ${r} ${r} 0 0 1 ${topEnd.x} ${topEnd.y}`

  // Bottom arc: LONG, ~220° (from 10° to 170° going the long way around bottom)
  // This wraps from right side, down, to left side — like a C or open U
  const botStart = arcPoint(-20)
  const botEnd = arcPoint(200)
  const botPath = `M ${botStart.x} ${botStart.y} A ${r} ${r} 0 1 1 ${botEnd.x} ${botEnd.y}`

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
      animate={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <defs>
        <filter id="symbolGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Top arc — short, white (eyebrow/bóveda) */}
      <path
        d={topPath}
        fill="none"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={0.95}
      />

      {/* Bottom arc — long, color (wraps around, extremes go up on sides) */}
      <motion.path
        d={botPath}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        animate={animate ? { opacity: [0.85, 1, 0.85] } : undefined}
        transition={animate ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />

      {/* Center dot — large and prominent */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={dotRadius}
        fill={color}
        filter="url(#symbolGlow)"
        animate={animate ? { scale: [1, 1.12, 1], opacity: [0.9, 1, 0.9] } : undefined}
        transition={animate ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />
    </motion.svg>
  )
}

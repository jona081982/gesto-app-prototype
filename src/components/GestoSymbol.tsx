import { motion } from 'framer-motion'

interface GestoSymbolProps {
  size?: number
  color?: string
  animate?: boolean
  className?: string
}

/**
 * La "o" inteligente de Gestos — fiel al logo real.
 * Arcos con GAP visible entre ellos (no forman un círculo cerrado).
 * Arco superior blanco, arco inferior color de vertical.
 * Punto central prominente. Barras laterales FUERA de los arcos.
 */
export function GestoSymbol({ size = 36, color = '#10B981', animate = true, className = '' }: GestoSymbolProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.34
  const strokeWidth = size * 0.13
  const dotRadius = size * 0.12
  const barWidth = size * 0.07
  const barHeight = size * 0.18

  const toRad = (deg: number) => (deg * Math.PI) / 180
  const arcPoint = (angle: number) => ({
    x: cx + r * Math.cos(toRad(angle)),
    y: cy + r * Math.sin(toRad(angle)),
  })

  // Top arc: -150° to -30° (upper half with wide gaps on sides)
  const topStart = arcPoint(-150)
  const topEnd = arcPoint(-30)
  const topPath = `M ${topStart.x} ${topStart.y} A ${r} ${r} 0 0 1 ${topEnd.x} ${topEnd.y}`

  // Bottom arc: 30° to 150° (lower half with wide gaps on sides)
  const botStart = arcPoint(30)
  const botEnd = arcPoint(150)
  const botPath = `M ${botStart.x} ${botStart.y} A ${r} ${r} 0 0 1 ${botEnd.x} ${botEnd.y}`

  // Bars outside the arcs
  const barGap = size * 0.08
  const leftBarX = cx - r - strokeWidth / 2 - barGap - barWidth
  const rightBarX = cx + r + strokeWidth / 2 + barGap

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

      {/* Top arc (white) */}
      <path
        d={topPath}
        fill="none"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={0.95}
      />

      {/* Bottom arc (vertical color) */}
      <motion.path
        d={botPath}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        animate={animate ? { opacity: [0.8, 1, 0.8] } : undefined}
        transition={animate ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />

      {/* Center dot — large and prominent */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={dotRadius}
        fill={color}
        filter="url(#symbolGlow)"
        animate={animate ? { scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] } : undefined}
        transition={animate ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />

      {/* Left bar */}
      <motion.rect
        x={leftBarX}
        y={cy - barHeight / 2}
        width={barWidth}
        height={barHeight}
        rx={barWidth / 2}
        fill={color}
        opacity={0.7}
        animate={animate ? { opacity: [0.5, 0.9, 0.5] } : undefined}
        transition={animate ? { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 } : undefined}
      />

      {/* Right bar */}
      <motion.rect
        x={rightBarX}
        y={cy - barHeight / 2}
        width={barWidth}
        height={barHeight}
        rx={barWidth / 2}
        fill={color}
        opacity={0.7}
        animate={animate ? { opacity: [0.5, 0.9, 0.5] } : undefined}
        transition={animate ? { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } : undefined}
      />
    </motion.svg>
  )
}

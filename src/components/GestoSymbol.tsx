import { motion } from 'framer-motion'

interface GestoSymbolProps {
  size?: number
  color?: string
  animate?: boolean
  className?: string
}

/**
 * La "o" de Gestos — réplica exacta.
 * 
 * Dos arcos cortos del mismo largo:
 * - Arco superior centrado arriba (blanco)
 * - Arco inferior centrado abajo (color vertical)
 * - Gap amplio a izquierda y derecha entre ambos arcos
 * - Barras laterales cortas a cada lado (color vertical)
 * - Punto central grande (color vertical)
 */
export function GestoSymbol({ size = 36, color = '#10B981', animate = true, className = '' }: GestoSymbolProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.36
  const strokeWidth = size * 0.12
  const dotRadius = size * 0.11
  const barWidth = size * 0.065
  const barHeight = size * 0.16

  const toRad = (deg: number) => (deg * Math.PI) / 180
  const arcPoint = (angle: number) => ({
    x: cx + r * Math.cos(toRad(angle)),
    y: cy + r * Math.sin(toRad(angle)),
  })

  // Top arc: ~100° centered at top (from -130° to -50°)
  const topStart = arcPoint(-130)
  const topEnd = arcPoint(-50)
  const topPath = `M ${topStart.x} ${topStart.y} A ${r} ${r} 0 0 1 ${topEnd.x} ${topEnd.y}`

  // Bottom arc: ~100° centered at bottom (from 50° to 130°)
  const botStart = arcPoint(50)
  const botEnd = arcPoint(130)
  const botPath = `M ${botStart.x} ${botStart.y} A ${r} ${r} 0 0 1 ${botEnd.x} ${botEnd.y}`

  // Bars at 0° (right) and 180° (left) — short vertical bars at the sides
  const leftBarX = cx - r - barWidth / 2
  const rightBarX = cx + r - barWidth / 2

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

      {/* Top arc — short, white, centered at top */}
      <path
        d={topPath}
        fill="none"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={0.95}
      />

      {/* Bottom arc — short, color, centered at bottom */}
      <motion.path
        d={botPath}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        animate={animate ? { opacity: [0.85, 1, 0.85] } : undefined}
        transition={animate ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />

      {/* Left bar */}
      <motion.rect
        x={leftBarX}
        y={cy - barHeight / 2}
        width={barWidth}
        height={barHeight}
        rx={barWidth / 2}
        fill={color}
        opacity={0.8}
        animate={animate ? { opacity: [0.6, 1, 0.6] } : undefined}
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
        opacity={0.8}
        animate={animate ? { opacity: [0.6, 1, 0.6] } : undefined}
        transition={animate ? { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } : undefined}
      />

      {/* Center dot */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={dotRadius}
        fill={color}
        filter="url(#symbolGlow)"
        animate={animate ? { scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] } : undefined}
        transition={animate ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />
    </motion.svg>
  )
}

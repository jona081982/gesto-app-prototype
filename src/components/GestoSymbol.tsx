import { motion } from 'framer-motion'

interface GestoSymbolProps {
  size?: number
  color?: string
  animate?: boolean
  className?: string
}

/**
 * La "o" inteligente de Gestos.
 * - Arco superior: negro/blanco (bóveda de seguridad)
 * - Arco inferior: color de vertical (empatía/solución)
 * - Punto central: color de vertical (núcleo IA)
 * - Barras laterales: color de vertical (conexión digital)
 *
 * Para Copropiedad: color = #10B981 (verde esmeralda)
 */
export function GestoSymbol({ size = 32, color = '#10B981', animate = true, className = '' }: GestoSymbolProps) {
  const r = size / 2
  const strokeWidth = size * 0.12
  const dotRadius = size * 0.08
  const barWidth = size * 0.06
  const barHeight = size * 0.18
  const gap = size * 0.15

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
      {/* Glow filter */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Arco superior (blanco/claro — bóveda) */}
      <path
        d={`M ${r * 0.35} ${r} A ${r * 0.45} ${r * 0.45} 0 0 1 ${r * 1.65} ${r}`}
        fill="none"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={0.9}
      />

      {/* Arco inferior (color vertical — empatía) */}
      <motion.path
        d={`M ${r * 0.35} ${r} A ${r * 0.45} ${r * 0.45} 0 0 0 ${r * 1.65} ${r}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        animate={animate ? { opacity: [0.7, 1, 0.7] } : undefined}
        transition={animate ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />

      {/* Punto central (núcleo IA) */}
      <motion.circle
        cx={r}
        cy={r}
        r={dotRadius}
        fill={color}
        filter="url(#glow)"
        animate={animate ? { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] } : undefined}
        transition={animate ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />

      {/* Barra izquierda */}
      <motion.rect
        x={r * 0.12}
        y={r - barHeight / 2}
        width={barWidth}
        height={barHeight}
        rx={barWidth / 2}
        fill={color}
        opacity={0.6}
        animate={animate ? { opacity: [0.4, 0.8, 0.4] } : undefined}
        transition={animate ? { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } : undefined}
      />

      {/* Barra derecha */}
      <motion.rect
        x={size - r * 0.12 - barWidth}
        y={r - barHeight / 2}
        width={barWidth}
        height={barHeight}
        rx={barWidth / 2}
        fill={color}
        opacity={0.6}
        animate={animate ? { opacity: [0.4, 0.8, 0.4] } : undefined}
        transition={animate ? { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 } : undefined}
      />
    </motion.svg>
  )
}

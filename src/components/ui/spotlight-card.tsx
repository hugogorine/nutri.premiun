import { useRef, type CSSProperties, type HTMLAttributes, type PointerEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Spotlight Card (GlowCard) — recriado a partir do comportamento do componente
 * da EaseMize (21st.dev/@easemize/components/spotlight-card), cujo código está
 * bloqueado. Um brilho segue o cursor pelo fundo e acende a borda perto dele.
 * Sem mouse ou com movimento reduzido, o card fica parado com a borda neutra.
 */
type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  /** Cor do brilho; por padrão, o verde-menta do projeto. */
  glowColor?: string
  /** Raio do holofote em px. */
  spotlightSize?: number
}

export function GlowCard({
  children,
  className,
  glowColor = 'var(--mint)',
  spotlightSize = 280,
  style,
  ...props
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
    el.style.setProperty('--spot-on', '1')
  }

  const onPointerLeave = () => ref.current?.style.setProperty('--spot-on', '0')

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn('spotlight-card relative isolate rounded-2xl border border-line bg-surface', className)}
      style={{ '--spot-color': glowColor, '--spot-size': `${spotlightSize}px`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
}

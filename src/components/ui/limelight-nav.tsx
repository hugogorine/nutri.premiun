import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Limelight Nav — recriado a partir do comportamento do componente da EaseMize
 * (21st.dev/@easemize/components/limelight-nav), cujo código está bloqueado.
 * Uma barrinha de luz no topo do item ativo, com um cone de luz descendo
 * sobre ele, desliza até o item escolhido.
 */
export type NavItem = {
  id: string
  label: string
  icon?: ReactNode
  href?: string
  onClick?: () => void
}

type LimelightNavProps = {
  items: NavItem[]
  /** Controlado: -1 apaga a luz (nenhum item ativo). */
  activeIndex?: number
  defaultActiveIndex?: number
  onTabChange?: (index: number) => void
  className?: string
  limelightClassName?: string
  itemClassName?: string
  'aria-label'?: string
}

export function LimelightNav({
  items,
  activeIndex: controlled,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  limelightClassName,
  itemClassName,
  'aria-label': ariaLabel = 'Navegação principal',
}: LimelightNavProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultActiveIndex)
  const active = controlled ?? uncontrolled
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const lightRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    const light = lightRef.current
    const place = () => {
      const item = itemRefs.current[active]
      if (!light || !item) return
      light.style.left = `${item.offsetLeft + item.offsetWidth / 2 - light.offsetWidth / 2}px`
    }
    place()
    if (!ready) {
      // Só liga a transição depois do primeiro posicionamento, para a luz não "voar" no carregamento.
      const id = requestAnimationFrame(() => setReady(true))
      return () => cancelAnimationFrame(id)
    }
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [active, ready, items.length])

  return (
    <nav aria-label={ariaLabel} className={cn('relative inline-flex items-stretch rounded-full border border-line bg-surface/70 px-1.5 backdrop-blur-md', className)}>
      {items.map((item, index) => {
        const isActive = index === active
        return (
          <a
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            href={item.href ?? `#${item.id}`}
            aria-current={isActive ? 'location' : undefined}
            onClick={() => {
              if (controlled === undefined) setUncontrolled(index)
              onTabChange?.(index)
              item.onClick?.()
            }}
            className={cn(
              'relative z-10 flex min-h-11 items-center gap-2 rounded-full px-3.5 text-sm font-medium transition-colors duration-300 motion-reduce:transition-none',
              isActive ? 'text-ink' : 'text-ink-2 hover:text-ink',
              itemClassName,
            )}
          >
            {item.icon ? <span aria-hidden="true" className="[&_svg]:size-4">{item.icon}</span> : null}
            {item.label}
          </a>
        )
      })}

      <div
        ref={lightRef}
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-0 z-0 h-[3px] w-10 rounded-b-full bg-mint shadow-[0_0_14px_1px_var(--mint)]',
          ready && 'transition-[left,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          active < 0 ? 'opacity-0' : 'opacity-100',
          limelightClassName,
        )}
      >
        <div className="absolute left-[-55%] top-[3px] h-9 w-[210%] bg-gradient-to-b from-mint/25 to-transparent [clip-path:polygon(22%_0,78%_0,100%_100%,0_100%)]" />
      </div>
    </nav>
  )
}

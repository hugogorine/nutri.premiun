import { useId, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Depoimentos só em texto, um por vez — recriado no formato dos "animated
 * testimonials" da comunidade do 21st.dev, sem fotos. Sem rolagem automática:
 * quem lê decide quando passar. Setas do teclado funcionam com o foco no bloco.
 */
export type Testimonial = {
  quote: string
  name: string
  detail: string
}

type TestimonialsProps = {
  items: Testimonial[]
  className?: string
}

export function Testimonials({ items, className }: TestimonialsProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const reduce = useReducedMotion()
  const id = useId()
  const current = items[index]

  const go = (step: number) => {
    setDirection(step)
    setIndex((i) => (i + step + items.length) % items.length)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') go(1)
    if (event.key === 'ArrowLeft') go(-1)
  }

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label="Depoimentos de pacientes"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn('rounded-3xl outline-offset-8', className)}
    >
      <div className="grid min-h-[17rem] items-start sm:min-h-[15rem]" aria-live="polite" id={id}>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.figure
            key={index}
            className="[grid-area:1/1]"
            initial={reduce ? false : { opacity: 0, x: 24 * direction, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={reduce ? undefined : { opacity: 0, x: -24 * direction, filter: 'blur(6px)' }}
            transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="font-serif text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.15] text-ink text-pretty">
              <span aria-hidden="true" className="text-mint">“</span>
              {current.quote}
              <span aria-hidden="true" className="text-mint">”</span>
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink-2">
              <span className="font-semibold text-ink">{current.name}</span>
              <span aria-hidden="true"> · </span>
              {current.detail}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-controls={id}
          aria-label="Depoimento anterior"
          className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-mint hover:text-mint motion-reduce:transition-none"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-controls={id}
          aria-label="Próximo depoimento"
          className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-mint hover:text-mint motion-reduce:transition-none"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        <p className="tabular ml-2 text-sm text-ink-2" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </p>
        <span className="sr-only">
          Depoimento {index + 1} de {items.length}
        </span>
      </div>
    </div>
  )
}

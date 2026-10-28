import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { Reveal } from '@/components/site/reveal'

const steps = [
  {
    title: 'Primeira conversa',
    text: 'Pelo WhatsApp, você conta o que está buscando e escolhe o formato: presencial em Macapá ou online, por videochamada.',
  },
  {
    title: 'Consulta sem pressa',
    text: 'Uma conversa sobre a sua história com a comida, rotina, sono, saúde e o que já tentou antes. Sem julgamento e sem a balança como protagonista.',
  },
  {
    title: 'Plano e acompanhamento',
    text: 'Você sai com um plano possível e combinados claros. Nos retornos, a gente ajusta o que funcionou e o que precisa mudar.',
  },
]

export default function Consultation() {
  const listRef = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <section id="consulta" aria-labelledby="consultation-title" className="border-t border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[5fr_7fr] md:gap-16 md:py-28">
        <Reveal className="md:sticky md:top-32 md:self-start">
          <p className="kicker flex items-center gap-3">
            <span className="h-px w-8 bg-emerald" aria-hidden="true" />
            Passo a passo
          </p>
          <h2 id="consultation-title" className="mt-5 font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[1.02] text-ink">
            Como funciona a consulta
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-2 md:text-lg">
            Três momentos, no seu ritmo. O primeiro passo é só uma mensagem.
          </p>
        </Reveal>

        <ol ref={listRef} className="relative">
          {/* Trilho da linha do tempo: a linha menta se desenha conforme a rolagem. */}
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[1.375rem] w-px bg-line" />
          <motion.span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[1.375rem] w-px origin-top bg-mint"
            style={{ scaleY: reduce ? 1 : progress }}
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative grid grid-cols-[2.75rem_1fr] gap-5 pb-14 last:pb-0 md:gap-8">
              <span className="tabular relative z-10 grid size-11 place-items-center rounded-full border border-line bg-bg text-sm font-semibold text-mint">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="pt-1.5">
                <h3 className="font-serif text-[clamp(1.75rem,2.8vw,2.4rem)] leading-[1.08] text-ink">{step.title}</h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-2">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

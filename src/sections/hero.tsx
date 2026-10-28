import { motion, useReducedMotion } from 'motion/react'
import { MapPin } from 'lucide-react'
import BackgroundPaths from '@/components/kokonutui/background-paths'
import BlurText from '@/components/BlurText'
import RotatingText from '@/components/RotatingText'
import { ImageSlot } from '@/components/site/image-slot'
import { WhatsAppCta } from '@/components/site/whatsapp-cta'
import { useIsCompact } from '@/hooks/use-media'

const PORTRAIT_ALT = 'Retrato de Marina Alencar, nutricionista, sorrindo de leve em um ambiente escuro com luz lateral suave e tons verdes'

export function Hero() {
  const compact = useIsCompact()
  const reduce = useReducedMotion()

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative -mt-px">
      <BackgroundPaths
        count={compact ? 15 : 36}
        speed={compact ? 0.45 : 0.8}
        spread={compact ? 0.8 : 1}
        angle={-7}
        interactive={!compact}
        lineClassName="text-emerald"
        className="min-h-[calc(100svh-7.5rem)] items-start bg-transparent md:min-h-[calc(100svh-4.5rem)] md:items-center"
      >
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-7 pb-16 text-center sm:px-6 md:py-10">
          <p className="inline-flex min-h-9 items-center gap-2 rounded-full border border-line bg-surface/70 px-4 text-sm text-ink-2 backdrop-blur-sm">
            <MapPin className="size-3.5 text-mint" aria-hidden="true" />
            Presencial em Macapá e online
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-serif text-[clamp(2.65rem,min(8.4vw,12.5svh),6.4rem)] leading-[1.02] tracking-[-0.015em] text-ink md:mt-7"
          >
            <span className="flex flex-wrap items-center justify-center gap-x-[0.24em]">
              <BlurText as="span" text="Fazer as pazes" delay={90} stepDuration={0.4} blur={12} distance={18} trigger="load" />
              <motion.span
                aria-hidden="true"
                className="hidden md:inline-block"
                initial={reduce ? false : { opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ImageSlot
                  file="hero-retrato.jpg"
                  ratio="3 / 4"
                  alt={PORTRAIT_ALT}
                  label={false}
                  className="h-[0.86em] translate-y-[0.06em] rounded-t-full rounded-b-[0.14em] border border-line"
                />
              </motion.span>
            </span>
            <span className="flex flex-wrap justify-center gap-x-[0.24em]">
              <BlurText as="span" text="com a comida," baseDelay={0.32} delay={90} stepDuration={0.4} blur={12} distance={18} trigger="load" />
              <BlurText
                as="span"
                text="sem pressa."
                baseDelay={0.55}
                delay={90}
                stepDuration={0.4}
                blur={12}
                distance={18}
                trigger="load"
                className="italic text-mint"
              />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-2 md:mt-6 md:text-lg">
            Nutrição comportamental para emagrecer
            <span className="mt-1 flex justify-center font-semibold text-ink">
              <RotatingText
                texts={['sem dieta da moda', 'sem culpa', 'sem terrorismo nutricional']}
                effect="blur"
                splitBy="words"
                staggerDuration={0.04}
                rotationInterval={2800}
                mainClassName="text-mint"
              />
            </span>
          </p>

          <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-2">
            Para quem cansou de recomeçar: um cuidado que olha para a fome emocional, para a sua rotina e para a sua
            autonomia na hora de comer.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 md:mt-8">
            <WhatsAppCta magnetic label="Agendar consulta" />
            <p className="text-sm text-ink-2">A primeira conversa é pelo WhatsApp.</p>
          </div>

          {/* No celular o retrato sai do título e vem para baixo, maior. */}
          <ImageSlot
            file="hero-retrato.jpg"
            ratio="3 / 4"
            alt={PORTRAIT_ALT}
            className="mt-12 w-[min(68%,15rem)] rounded-t-full rounded-b-3xl border border-line md:hidden"
          />
        </div>
      </BackgroundPaths>
    </section>
  )
}

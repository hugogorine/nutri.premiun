import { Reveal } from '@/components/site/reveal'
import { Testimonials, type Testimonial } from '@/components/ui/testimonials'

const items: Testimonial[] = [
  {
    quote:
      'Pela primeira vez saí de uma consulta sem uma lista do que não posso comer. Saí entendendo por que eu comia daquele jeito.',
    name: 'C. R.',
    detail: 'atendimento presencial em Macapá',
  },
  {
    quote:
      'Eu achava que o problema era falta de força de vontade. Hoje percebo quando é fome e quando é cansaço, e minhas noites ficaram mais leves.',
    name: 'M. S.',
    detail: 'atendimento online',
  },
  {
    quote:
      'O acompanhamento entre as consultas fez diferença. Quando a semana desandava, eu tinha com quem ajustar em vez de largar tudo.',
    name: 'J. A.',
    detail: 'atendimento presencial em Macapá',
  },
]

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-title" className="border-t border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[4fr_8fr] md:gap-16 md:py-28">
        <Reveal>
          <p className="kicker flex items-center gap-3">
            <span className="h-px w-8 bg-emerald" aria-hidden="true" />
            Depoimentos
          </p>
          <h2 id="testimonials-title" className="mt-5 font-serif text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.04] text-ink">
            Sobre a experiência
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-2">
            Relatos sobre o atendimento e a relação com a comida. Cada pessoa vive o próprio processo.
          </p>
        </Reveal>

        <Reveal>
          <Testimonials items={items} />
        </Reveal>
      </div>
    </section>
  )
}

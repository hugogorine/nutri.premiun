import { CalendarHeart, HeartHandshake, MessagesSquare, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { GlowCard } from '@/components/ui/spotlight-card'

const pillars: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: HeartHandshake,
    title: 'Fome emocional',
    text: 'Aprender a diferenciar fome física de fome emocional, e o que fazer com cada uma sem entrar em guerra com o prato.',
  },
  {
    icon: CalendarHeart,
    title: 'Rotina possível',
    text: 'Um plano montado em cima da sua agenda real: trabalho, família, sono e o que de fato tem na sua cozinha.',
  },
  {
    icon: Utensils,
    title: 'Reeducação sem proibições',
    text: 'Nenhum alimento é vilão. A gente ajusta contexto, frequência e quantidade, sem lista de proibidos na geladeira.',
  },
  {
    icon: MessagesSquare,
    title: 'Acompanhamento contínuo',
    text: 'Retornos e contato entre as consultas para ajustar o caminho quando a vida muda, em vez de desistir dele.',
  },
]

export default function Method() {
  return (
    <section id="metodo" aria-labelledby="method-title" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="kicker flex items-center gap-3">
            <span className="h-px w-8 bg-emerald" aria-hidden="true" />
            Método
          </p>
          <h2 id="method-title" className="mt-5 font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[1.02] text-ink">
            Como eu trabalho
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-2 md:text-lg">
            Quatro frentes que andam juntas. O peso da balança não é o centro da conversa: a sua relação com a comida é.
          </p>
        </Reveal>

        <Reveal stagger={0.08} className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <GlowCard key={title} className="flex min-h-64 flex-col p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-full border border-line text-mint">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="tabular text-sm text-ink-2" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-auto pt-10 font-serif text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.08] text-ink">{title}</h3>
              <p className="mt-3 max-w-md text-[0.97rem] leading-relaxed text-ink-2">{text}</p>
            </GlowCard>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

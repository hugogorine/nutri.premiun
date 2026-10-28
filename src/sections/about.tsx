import { ImageSlot } from '@/components/site/image-slot'
import { Reveal } from '@/components/site/reveal'
import { CRN } from '@/lib/site'

const education = [
  { title: 'Graduação em Nutrição', detail: 'Base clínica e de saúde coletiva' },
  { title: 'Especialização em Nutrição Comportamental', detail: 'Fome emocional, comportamento e escolhas alimentares' },
  { title: 'Formação em Comer Atento', detail: 'Atenção plena aplicada às refeições do dia a dia' },
]

export default function About() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[5fr_7fr] md:gap-16 md:py-28">
        <div className="md:sticky md:top-28 md:self-start">
          <ImageSlot
            file="sobre-retrato.jpg"
            ratio="4 / 5"
            alt="Marina Alencar sentada à mesa do consultório, de perfil, com luz lateral suave em um ambiente escuro e tons verdes"
            className="rounded-[2rem] border border-line"
          />
          <p className="mt-4 text-sm text-ink-2">
            Marina Alencar · Nutricionista · {CRN}
          </p>
        </div>

        <Reveal>
          <p className="kicker flex items-center gap-3">
            <span className="h-px w-8 bg-emerald" aria-hidden="true" />
            Sobre a Marina
          </p>
          <h2 id="about-title" className="mt-5 font-serif text-[clamp(2.2rem,4.8vw,3.75rem)] leading-[1.04] text-ink text-balance">
            Troquei a lista de proibidos por boas perguntas.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-2 md:text-[1.05rem]">
            <p>
              Sou nutricionista e atendo em Macapá e online. No consultório, percebi que quase ninguém chegava sem saber o
              que “deveria” comer. O que faltava era entender por que a comida tinha virado briga.
            </p>
            <p>
              Por isso trabalho com nutrição comportamental: olhamos para a fome, para as emoções e para a rotina com a
              mesma atenção que damos ao prato. O objetivo é você ganhar autonomia para fazer escolhas que se sustentam,
              sem depender de dieta.
            </p>
          </div>

          <dl className="mt-10 border-t border-line">
            {education.map((item) => (
              <div key={item.title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_1.1fr] sm:gap-6">
                <dt className="font-semibold text-ink">{item.title}</dt>
                <dd className="text-ink-2">{item.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-serif text-2xl text-ink">Abordagem</h3>
            <p className="mt-2 leading-relaxed text-ink-2">
              Acolhimento sem julgamento, ciência sem terrorismo e um plano feito para a sua vida real. Cada pessoa tem o
              próprio ritmo, e é nele que o cuidado acontece.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

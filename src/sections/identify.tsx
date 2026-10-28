import { Reveal } from '@/components/site/reveal'

const entries = [
  {
    when: 'Terça · 22h40',
    line: 'Abri a geladeira sem fome. De novo.',
    note: 'Beliscar à noite costuma ter mais a ver com o dia que você teve do que com comida.',
  },
  {
    when: 'Segunda · 7h00',
    line: 'Hoje eu começo a dieta. Agora vai.',
    note: 'Recomeçar toda segunda cansa. Constância nasce de um plano que cabe na sua semana.',
  },
  {
    when: 'Domingo · 15h10',
    line: 'Comi um pedaço de bolo e a culpa veio junto.',
    note: 'Culpa não é tempero. Comer em paz faz parte do cuidado, não é prêmio.',
  },
  {
    when: 'Já faz anos',
    line: 'Já tentei de tudo e sempre volto ao começo.',
    note: 'O efeito sanfona não é falta de disciplina. É sinal de que a restrição não se sustenta.',
  },
]

export default function Identify() {
  return (
    <section aria-labelledby="identify-title" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <h2 id="identify-title" className="font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[1.02] text-ink">
            Você se identifica?
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-2 md:justify-self-end">
            Se alguma destas anotações parece ter saído do seu diário, saiba que não é só com você. E nenhuma delas é
            falta de força de vontade.
          </p>
        </Reveal>

        <Reveal stagger={0.09} className="mt-14 md:mt-20">
          {entries.map((entry) => (
            <article
              key={entry.when}
              className="grid gap-3 border-t border-line py-7 md:grid-cols-[10rem_1fr_17rem] md:gap-10 md:py-9"
            >
              <p className="tabular pt-1 text-sm text-ink-2">{entry.when}</p>
              <p className="font-serif text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] text-ink text-pretty">
                {entry.line}
              </p>
              <p className="text-[0.95rem] leading-relaxed text-ink-2 md:pt-1.5">{entry.note}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

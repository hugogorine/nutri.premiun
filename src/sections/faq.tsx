import { Reveal } from '@/components/site/reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { WHATSAPP_URL } from '@/lib/site'

const questions = [
  {
    q: 'O que muda na nutrição comportamental?',
    a: 'Além do que você come, a gente olha para como, quando e por que você come. Fome emocional, rotina, sono e a sua história com dietas entram na conversa. O plano nasce daí, e não de um cardápio pronto.',
  },
  {
    q: 'Vou ter que cortar carboidrato ou doce?',
    a: 'Não. Nenhum alimento é proibido. O trabalho é entender contexto, frequência e quantidade para que você coma com tranquilidade, inclusive o que gosta.',
  },
  {
    q: 'Como funciona o atendimento online?',
    a: 'A consulta é por videochamada, com o mesmo cuidado do presencial. O plano e os materiais chegam em formato digital, e o acompanhamento entre as consultas também acontece à distância.',
  },
  {
    q: 'Em quanto tempo vou ver resultado?',
    a: 'Cada pessoa tem um ritmo, então não trabalho com prazos nem números prometidos. O foco é construir constância e uma relação mais tranquila com a comida, que é o que se sustenta com o tempo.',
  },
  {
    q: 'Preciso me pesar na consulta?',
    a: 'Só se fizer sentido para você e para o seu cuidado. A balança não é o centro do atendimento, e a gente combina junto quais acompanhamentos fazem sentido no seu caso.',
  },
]

export default function Faq() {
  return (
    <section id="duvidas" aria-labelledby="faq-title" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[5fr_7fr] md:gap-16 md:py-28">
        <Reveal className="md:sticky md:top-32 md:self-start">
          <p className="kicker flex items-center gap-3">
            <span className="h-px w-8 bg-emerald" aria-hidden="true" />
            Dúvidas
          </p>
          <h2 id="faq-title" className="mt-5 font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[1.02] text-ink">
            Perguntas frequentes
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-2">
            Ficou outra dúvida?{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-semibold text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint"
            >
              Pergunte pelo WhatsApp
            </a>
          </p>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-line">
            {questions.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`} className="border-b border-line">
                <AccordionTrigger className="min-h-11 items-center rounded-none py-5 text-lg font-medium text-ink hover:text-mint hover:no-underline md:text-xl [&_[data-slot=accordion-trigger-icon]]:text-mint">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-ink-2">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}

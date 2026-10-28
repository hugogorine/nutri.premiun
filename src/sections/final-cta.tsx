import { Reveal } from '@/components/site/reveal'
import { WhatsAppCta } from '@/components/site/whatsapp-cta'

export default function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="border-t border-line">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-36">
        <h2 id="final-cta-title" className="font-serif text-[clamp(2.5rem,6.4vw,5.25rem)] leading-[1.02] text-ink text-balance">
          A próxima página do seu diário pode ser <em className="text-mint">diferente.</em>
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-2 md:text-lg">
          Agende sua consulta, presencial em Macapá ou online. É só mandar uma mensagem.
        </p>
        <div className="mt-10">
          <WhatsAppCta label="Agendar pelo WhatsApp" />
        </div>
      </Reveal>
    </section>
  )
}

import { ADDRESS, CRN, HGD_URL, INSTAGRAM, WHATSAPP_URL } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/50 pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] md:py-16">
        <div>
          <p className="font-serif text-[1.9rem] leading-none text-ink">Marina Alencar</p>
          <p className="mt-2 text-sm text-ink-2">Nutrição Comportamental · {CRN}</p>
        </div>

        <address className="not-italic text-sm leading-relaxed text-ink-2">
          <p className="font-semibold text-ink">Consultório</p>
          <p className="mt-2">{ADDRESS.street}</p>
          <p>{ADDRESS.city}</p>
          <p className="mt-1">Atendimento online para todo o Brasil</p>
        </address>

        <div className="text-sm leading-relaxed text-ink-2">
          <p className="font-semibold text-ink">Contato</p>
          <p className="mt-2">Instagram {INSTAGRAM}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-semibold text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-line px-4 py-6 text-xs leading-relaxed text-ink-2 sm:px-6">
        <p>
          Imagens ilustrativas geradas por inteligência artificial. Marina Alencar é uma profissional fictícia e os dados
          desta página ({CRN}, endereço e contatos) são de demonstração.
        </p>
      </div>

      <div className="border-t border-line bg-bg">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-ink-2 sm:px-6">
          Site demonstrativo criado por Hugo Gorine Design —{' '}
          <a
            href={HGD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-semibold text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint"
          >
            quero um site assim
          </a>
        </p>
      </div>
    </footer>
  )
}

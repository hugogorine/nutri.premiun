import { MessageCircle } from 'lucide-react'
import Magnet from '@/components/Magnet'
import StarBorder from '@/components/StarBorder'
import { useIsCompact } from '@/hooks/use-media'
import { WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

type WhatsAppCtaProps = {
  label?: string
  /** Magnet com força baixa; desligado no celular. */
  magnetic?: boolean
  className?: string
}

export function WhatsAppCta({ label = 'Agendar consulta', magnetic = false, className }: WhatsAppCtaProps) {
  const compact = useIsCompact()

  const button = (
    <StarBorder
      as="a"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      theme="light"
      color="var(--ink)"
      radius={999}
      thickness={1.5}
      duration={5}
      glow={0.7}
      className={cn('min-h-13 px-7 text-base font-semibold', className)}
    >
      <MessageCircle className="size-[1.1em]" aria-hidden="true" />
      {label}
      <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
    </StarBorder>
  )

  if (!magnetic) return button

  return (
    <Magnet padding={70} magnetStrength={7} disabled={compact} wrapperClassName="inline-block">
      {button}
    </Magnet>
  )
}

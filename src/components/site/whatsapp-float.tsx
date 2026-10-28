import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Botão flutuante só no celular. Aparece depois do hero, onde o CTA principal já está à vista. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
      className={cn(
        'fixed right-4 z-50 grid size-14 place-items-center rounded-full bg-mint text-bg shadow-[0_10px_30px_-8px_color-mix(in_srgb,var(--mint)_55%,transparent)] transition-[opacity,translate] duration-300 motion-reduce:transition-none md:hidden',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  )
}

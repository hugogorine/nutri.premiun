import { useEffect, useState } from 'react'
import { LimelightNav } from '@/components/ui/limelight-nav'
import { NAV_ITEMS, WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

const items = NAV_ITEMS.map((item) => ({ ...item }))

/** Item ativo = última seção cujo topo já passou de 40% da tela. */
function useActiveSection() {
  const [active, setActive] = useState(-1)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerHeight * 0.4
      let next = -1
      NAV_ITEMS.forEach((item, index) => {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top < line) next = index
      })
      setActive(next)
      setScrolled(window.scrollY > 8)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { active, scrolled }
}

export function Navbar() {
  const { active, scrolled } = useActiveSection()

  return (
    <header
      className={cn(
        'relative z-40 border-b transition-colors duration-300 motion-reduce:transition-none md:sticky md:top-0',
        scrolled ? 'border-line/70 bg-bg/80 backdrop-blur-lg' : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-4 pt-3 pb-3 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:py-3">
        <a href="#inicio" className="flex min-h-11 flex-col justify-center leading-none" aria-label="Marina Alencar, Nutrição Comportamental — voltar ao início">
          <span className="font-serif text-[1.55rem] tracking-[-0.01em] text-ink">Marina Alencar</span>
          <span className="mt-1 text-[0.7rem] font-medium tracking-[0.04em] text-ink-2">Nutrição Comportamental</span>
        </a>

        <LimelightNav
          items={items}
          activeIndex={active}
          className="col-span-2 row-start-2 justify-self-center md:col-span-1 md:row-start-1 md:col-start-2"
          itemClassName="px-3 sm:px-3.5"
        />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-self-end rounded-full bg-mint px-5 text-sm font-semibold text-bg transition-[filter] hover:brightness-110 motion-reduce:transition-none md:col-start-3"
        >
          Agendar
          <span className="sr-only"> consulta pelo WhatsApp (abre em nova aba)</span>
        </a>
      </div>
    </header>
  )
}

import ScrollReveal from '@/components/ScrollReveal'

export default function Manifesto() {
  return (
    <section aria-label="Manifesto" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-36">
      <div className="mx-auto max-w-4xl">
        <p className="kicker flex items-center gap-3">
          <span className="h-px w-8 bg-emerald" aria-hidden="true" />
          Um combinado antes de começar
        </p>
        <ScrollReveal
          baseOpacity={0.14}
          enableBlur
          blurStrength={3}
          baseRotation={0}
          containerClassName="mt-6"
          textClassName="font-serif !font-normal !text-[clamp(2rem,4.8vw,3.75rem)] !leading-[1.12] tracking-[-0.01em] text-ink"
        >
          Comer não precisa ser uma prova de força de vontade. Quando você entende a sua fome, a culpa perde espaço. E
          cuidar da saúde volta a caber no seu dia.
        </ScrollReveal>
      </div>
    </section>
  )
}

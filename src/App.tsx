import { lazy, Suspense } from 'react'
import Noise from '@/components/Noise'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'
import { Hero } from '@/sections/hero'
import { Navbar } from '@/sections/navbar'

// Tudo abaixo da dobra sai em chunks separados (inclusive o GSAP).
const Manifesto = lazy(() => import('@/sections/manifesto'))
const Identify = lazy(() => import('@/sections/identify'))
const Method = lazy(() => import('@/sections/method'))
const Consultation = lazy(() => import('@/sections/consultation'))
const About = lazy(() => import('@/sections/about'))
const TestimonialsSection = lazy(() => import('@/sections/testimonials-section'))
const Faq = lazy(() => import('@/sections/faq'))
const FinalCta = lazy(() => import('@/sections/final-cta'))
const Footer = lazy(() => import('@/sections/footer'))

function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-mint px-4 py-3 font-semibold text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <Manifesto />
          <Identify />
          <Method />
          <Consultation />
          <About />
          <TestimonialsSection />
          <Faq />
          <FinalCta />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppFloat />
      <Noise fixed opacity={0.04} fps={0} blendMode="overlay" zIndex={70} />
    </>
  )
}

export default App

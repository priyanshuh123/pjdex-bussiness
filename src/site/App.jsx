import { useEffect } from 'react'
import { BrandProvider } from './context/BrandContext.jsx'
import BrandEditModal from './components/BrandEditModal.jsx'
import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import Team from './sections/Team.jsx'
import ContactCTA from './sections/ContactCTA.jsx'

const REVEAL = '.service-block, .how-title, .step-item, .team-header-block, .team-member-card, .cta-dark-card, .services-main-title, .service-portfolio-card, .footer-col'

function useSiteEffects() {
  useEffect(() => {
    const els = document.querySelectorAll(REVEAL)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = `${(i % 3) * 90}ms`; io.observe(el) })
    const header = document.querySelector('.site-header')
    const bar = document.querySelector('.scroll-progress')
    const onScroll = () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])
}

function MainSiteContent() {
  useSiteEffects()
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

function AppContent() {
  return (
    <div className="app-root min-h-screen flex flex-col">
      <BrandEditModal />
      <MainSiteContent />
    </div>
  )
}

function App() {
  return (
    <BrandProvider>
      <AppContent />
    </BrandProvider>
  )
}

export default App
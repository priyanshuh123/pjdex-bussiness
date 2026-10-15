import React from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { useBrand } from '../context/BrandContext.jsx'

const exploreLinks = [
  { href: '#services', label: 'Our Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#team', label: 'Meet The Team' },
  { href: '#contact', label: 'Contact' },
]

const serviceLinks = [
  'Business websites',
  'Social media creatives',
  'Instagram ads',
]

function Footer() {
  const { brand, getWhatsAppLink } = useBrand()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer bg-[#0a0f1d] text-[#cbd5e1] border-t border-[#1a2336]">
      <div className="footer-topline" aria-hidden="true" />
      <div className="footer-glow footer-glow-left" aria-hidden="true" />
      <div className="footer-glow footer-glow-right" aria-hidden="true" />

      <div className="footer-inner container max-w-[1140px] w-[calc(100%-40px)] max-[640px]:w-[calc(100%-32px)] mx-auto pt-10 pb-8 sm:pt-16">
        <div className="footer-grid grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-10 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] lg:gap-12">
          {/* Brand column */}
          <div className="footer-col footer-brand-col col-span-2 flex flex-col gap-4 max-w-[360px] lg:col-span-1">
            <a
              className="inline-flex items-center w-fit no-underline"
              href="#home"
              aria-label="PJDex Growth Marketing Home"
            >
              <span className="footer-logo-wrap inline-flex items-center bg-white py-1.5 px-3.5 rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-0.5">
                <img
                  src="/images/pjdex-logo.png"
                  alt="PJDex Growth Marketing"
                  className="footer-brand-logo h-10 w-auto object-contain block max-[640px]:h-8"
                />
              </span>
            </a>

            <p className="footer-tagline text-[0.92rem] text-[#94a3b8] leading-[1.6]">
              Websites and Instagram ads for local businesses — built to bring
              customers to your door.
            </p>

            <a
              className="footer-chat-btn"
              href={getWhatsAppLink('Hi! I would like to talk about growing my business online.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} fill="currentColor" />
              <span>Chat on WhatsApp</span>
            </a>

            <span className="footer-status inline-flex items-center gap-2 text-[0.78rem] text-[#64748b]">
              <span className="footer-status-dot" aria-hidden="true" />
              Usually replies within 15 minutes
            </span>
          </div>

          {/* Explore */}
          <div className="footer-col flex flex-col">
            <h3 className="footer-col-title">Explore</h3>
            <ul className="footer-list">
              {exploreLinks.map(({ href, label }) => (
                <li key={label}>
                  <a className="footer-link" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col flex flex-col">
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-list">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a className="footer-link" href="#services">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="footer-col flex flex-col col-span-2 lg:col-span-1">
            <h3 className="footer-col-title">Get in touch</h3>
            <ul className="footer-list">
              <li>
                <a
                  className="footer-link"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={14} />
                  {brand.whatsappDisplay}
                </a>
              </li>
            </ul>
            <p className="footer-note text-[0.8rem] text-[#64748b] leading-[1.6] mt-4 max-w-[240px]">
              Tell us about your business and we&apos;ll reply with the next
              steps — no forms, no waiting rooms.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom mt-10 pt-6 border-t border-[#1a2336] flex flex-col items-start gap-3 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="footer-copyright text-[0.78rem] text-[#64748b]">
            © 2026 PJDex Growth Marketing. All rights reserved.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

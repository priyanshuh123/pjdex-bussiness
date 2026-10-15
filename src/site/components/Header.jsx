import React, { useState, useEffect } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { useBrand } from '../context/BrandContext.jsx'

function Header() {
  const { getWhatsAppLink } = useBrand()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Our Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#team', label: 'Meet The Team' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <header className="site-header sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] transition-all duration-200">
        <div className="header-inner max-w-[1140px] w-[calc(100%-32px)] mx-auto flex items-center justify-between h-[68px] sm:h-[74px] sm:w-[calc(100%-48px)]">

          {/* Logo — always visible */}
          <a
            className="brand-logo inline-flex items-center no-underline shrink-0"
            href="#home"
            aria-label="PJDex Growth Marketing Home"
          >
            <img
              src="/images/pjdex-logo.png"
              alt="PJDex Growth Marketing"
              className="h-9 sm:h-12 w-auto object-contain block"
            />
          </a>

          {/* Desktop navigation — only visible from 1024px and up */}
          <nav
            className="main-nav hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                className="nav-link text-[0.82rem] font-[650] tracking-[0.04em] uppercase text-[#4b5563] transition-colors duration-150 hover:text-[#111827] whitespace-nowrap"
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            {/* WhatsApp — always visible, compact on mobile */}
            <a
              className="inline-flex items-center gap-1.5 bg-[#22c55e] text-white font-semibold rounded-full transition-all duration-200 hover:bg-[#16a34a] hover:-translate-y-px
                         text-xs py-1.5 px-3
                         sm:text-[0.88rem] sm:py-2 sm:px-[18px] sm:gap-2"
              href={getWhatsAppLink('Hi! I would like to inquire about your website and advertising services.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} className="sm:hidden" fill="currentColor" />
              <MessageCircle size={16} className="hidden sm:inline-block" fill="currentColor" />
              <span>WhatsApp</span>
            </a>

            {/* Hamburger — visible only below 1024px */}
            <button
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle lg:hidden p-2 rounded-md text-[#111827] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-1"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e2e8f0]">
              <img src="/images/pjdex-logo.png" alt="PJDex" className="h-9 w-auto object-contain" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md hover:bg-gray-100 text-[#4b5563]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer links */}
            <nav className="flex flex-col py-4" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="px-6 py-4 text-[0.95rem] font-semibold text-[#111827] hover:bg-gray-50 hover:text-[#22c55e] transition-colors border-b border-[#f1f5f9] last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Drawer CTA */}
            <div className="mt-auto p-5 border-t border-[#e2e8f0]">
              <a
                className="flex items-center justify-center gap-2 bg-[#22c55e] text-white font-semibold py-3 rounded-full hover:bg-[#16a34a] transition-colors"
                href={getWhatsAppLink('Hi! I would like to inquire about your website and advertising services.')}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={16} fill="currentColor" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
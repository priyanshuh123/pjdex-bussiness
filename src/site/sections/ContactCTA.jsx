import React from 'react'
import { MessageCircle } from 'lucide-react'
import { useBrand } from '../context/BrandContext.jsx'

function ContactCTA() {
  const { brand, getWhatsAppLink } = useBrand()

  return (
    <section className="contact-cta-section pt-4 pb-20 bg-white" id="contact">
      <div className="container max-w-[1140px] w-[calc(100%-48px)] mx-auto">
        <div className="cta-dark-card bg-[#111827] text-white rounded-[36px] py-16 px-8 text-center flex flex-col items-center justify-center">
          <h2 className="cta-title text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] text-white mb-3">Ready to Grow Your Business?</h2>
          <p className="cta-subtext text-[1.05rem] text-[#94a3b8] max-w-[500px] mb-8">
            Send us a message and let&apos;s talk about your business.
          </p>

          <a
            className="cta-button-green inline-flex items-center gap-2.5 bg-[#22c55e] text-white text-[1.05rem] font-bold py-3.5 px-9 rounded-full transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_6px_24px_rgba(34,197,94,0.3)] no-underline hover:bg-[#16a34a] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(34,197,94,0.45)]"
            href={getWhatsAppLink('Hi! I am ready to grow my business and would like to chat.')}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={22} fill="currentColor" />
            <span>{brand.whatsappDisplay}</span>
          </a>

          <p className="cta-guarantee-note text-[0.82rem] text-[#64748b] mt-5">
            No pressure. Fast responses usually within 15 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA

import React, { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useBrand } from '../context/BrandContext.jsx'

function WhatsAppButton() {
  const { getWhatsAppLink } = useBrand()
  const [atFooter, setAtFooter] = useState(false)

  // Fade the floating chat button out once the footer (which has its own
  // WhatsApp button) comes into view, so the two never overlap.
  useEffect(() => {
    const footer = document.querySelector('.site-footer')
    if (!footer) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setAtFooter(e.isIntersecting))
      },
      { threshold: 0.15 }
    )
    io.observe(footer)
    return () => io.disconnect()
  }, [])

  return (
    <a
      className={`floating-whatsapp-btn fixed bottom-7 right-7 z-50 inline-flex items-center gap-2 bg-[#22c55e] text-white text-[0.92rem] font-[650] py-3 px-[22px] rounded-full shadow-[0_8px_25px_rgba(34,197,94,0.35)] no-underline transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#16a34a] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(34,197,94,0.45)] max-[640px]:bottom-[18px] max-[640px]:right-[18px] max-[640px]:py-2.5 max-[640px]:px-[18px] max-[640px]:text-[0.86rem]${atFooter ? ' is-hidden' : ''}`}
      href={getWhatsAppLink('Hi! I would like to chat with you regarding my business.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={atFooter ? 'true' : undefined}
      tabIndex={atFooter ? -1 : undefined}
    >
      <MessageCircle size={20} fill="currentColor" />
      <span>Chat With Us</span>
    </a>
  )
}

export default WhatsAppButton

import React from 'react'
import { MessageCircle } from 'lucide-react'
import { useBrand } from '../context/BrandContext.jsx'
import HeroImageSlider from '../components/HeroImageSlider.jsx'

/*
  Hero — 100% Tailwind (no custom CSS classes).

  Desktop / tablet: 2 columns (text | photo), 1 column under 900px.
  Mobile (<= 640px): heading on the left, portrait on the right;
  at <=375px the portrait follows the heading. Description, buttons and
  features use the full width. On mobile the text wrapper uses
  `contents`, so its children become direct grid items and can be
  placed next to / below the photo.
*/
function Hero() {
  const { getWhatsAppLink } = useBrand()

  return (
    <section
      className="bg-white pt-14 pb-20 max-[640px]:pt-5 max-[640px]:pb-10"
      id="home"
    >
      <div
        className="container mx-auto grid max-w-[1140px] grid-cols-[1.15fr_0.85fr] items-center gap-[60px] px-6
          max-[900px]:grid-cols-1 max-[900px]:gap-10
          max-[640px]:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] max-[640px]:items-start max-[640px]:gap-x-3 max-[640px]:gap-y-0 max-[640px]:px-4 max-[375px]:grid-cols-1"
      >
        {/* Hero content (becomes part of the grid on mobile) */}
        <div className="flex min-w-0 flex-col items-start max-[640px]:contents">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-1.5 text-[0.82rem] font-medium text-[#4b5563] max-[640px]:col-span-full max-[640px]:row-start-1 max-[640px]:mb-4 max-[640px]:max-w-full max-[640px]:justify-self-start max-[640px]:text-xs">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#22c55e]" />
            <span>For Local Businesses &amp; Retail Stores</span>
          </div>

          {/* Title */}
          <h1 className="mb-5 text-[clamp(2.5rem,5vw,3.8rem)] font-[850] leading-[1.08] tracking-[-0.04em] text-[#111827] max-[640px]:min-w-0 max-[640px]:col-start-1 max-[640px]:row-start-2 max-[640px]:mb-4 max-[640px]:text-[1.7rem] max-[640px]:leading-[1.1] max-[640px]:tracking-normal">
            Get More Customers for Your Business Online
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-[540px] text-[1.12rem] leading-[1.6] text-[#4b5563] max-[640px]:col-span-full max-[640px]:row-start-3 max-[640px]:mb-4 max-[640px]:text-[0.86rem] max-[640px]:leading-[1.55] max-[375px]:row-start-4">
            We build mobile-friendly websites and run targeted Instagram ads
            that bring interested customers straight to your WhatsApp.
          </p>

          {/* CTA buttons */}
          <div className="mb-8 flex flex-wrap items-center gap-4 max-[640px]:col-span-full max-[640px]:row-start-4 max-[640px]:mb-0 max-[640px]:w-full max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-2.5 max-[375px]:row-start-5">
            <a
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#22c55e] px-6 py-[11px] font-semibold text-white no-underline shadow-[0_4px_14px_rgba(34,197,94,0.25)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:bg-[#16a34a] hover:shadow-[0_6px_20px_rgba(34,197,94,0.35)] max-[640px]:w-full max-[640px]:whitespace-nowrap max-[640px]:px-3 max-[640px]:py-2.5 max-[640px]:text-[0.86rem]"
              href={getWhatsAppLink(
                'Hi! I am interested in getting more customers online for my business.'
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} fill="currentColor" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-[11px] font-semibold text-white no-underline transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:bg-black hover:shadow-[0_4px_14px_rgba(0,0,0,0.15)] max-[640px]:w-full max-[640px]:whitespace-nowrap max-[640px]:px-3 max-[640px]:py-2.5 max-[640px]:text-[0.86rem]"
              href="#services"
            >
              View Services
            </a>
          </div>

          {/* Features (a 3-column card on mobile) */}
          <div className="flex flex-wrap items-center gap-6 pt-2 max-[640px]:col-span-full max-[640px]:row-start-5 max-[640px]:mt-5 max-[640px]:grid max-[640px]:w-full max-[640px]:grid-cols-3 max-[640px]:gap-0 max-[640px]:rounded-[18px] max-[640px]:border max-[640px]:border-[#e2e8f0] max-[640px]:bg-white max-[640px]:px-1.5 max-[640px]:py-3.5 max-[640px]:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_2px_4px_-2px_rgba(0,0,0,0.05)] max-[375px]:row-start-6 [&>div]:max-[640px]:min-w-0 [&>div]:max-[375px]:flex-col [&>div]:max-[375px]:gap-1">
            <div className="inline-flex items-center gap-[7px] text-[0.86rem] font-medium text-[#4b5563] max-[640px]:justify-center max-[640px]:gap-2 max-[640px]:px-1.5 max-[640px]:text-[0.8rem] max-[640px]:leading-tight">
              <span className="text-base">⚡</span>
              <span>Fast Launch</span>
            </div>

            <div className="inline-flex items-center gap-[7px] text-[0.86rem] font-medium text-[#4b5563] max-[640px]:justify-center max-[640px]:gap-2 max-[640px]:border-l max-[640px]:border-[#e2e8f0] max-[640px]:px-1.5 max-[640px]:text-[0.8rem] max-[640px]:leading-tight">
              <span className="text-base">💬</span>
              <span>Direct Chat</span>
            </div>

            <div className="inline-flex items-center gap-[7px] text-[0.86rem] font-medium text-[#4b5563] max-[640px]:justify-center max-[640px]:gap-2 max-[640px]:border-l max-[640px]:border-[#e2e8f0] max-[640px]:px-1.5 max-[640px]:text-[0.8rem] max-[640px]:leading-tight">
              <span className="text-base">🎯</span>
              <span>Zero Fluff</span>
            </div>
          </div>
        </div>

        {/* Portrait slider */}
        <div className="flex min-w-0 justify-center max-[640px]:col-start-2 max-[640px]:row-start-2 max-[640px]:self-center max-[640px]:mb-4 max-[375px]:col-start-1 max-[375px]:row-start-3 max-[375px]:w-full [&>div]:max-[375px]:max-w-[180px]">
          <div className="relative mx-auto flex w-full min-w-0 max-w-[500px] flex-col items-center text-center">
            <HeroImageSlider />

            {/* Hidden on mobile to match the compact design */}
            <div className="inline-block max-w-full rounded-full bg-[#111827] px-6 py-2.5 text-[0.82rem] font-medium leading-[1.4] text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] max-[640px]:hidden">
              Real people. Direct communication. No middlemen.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
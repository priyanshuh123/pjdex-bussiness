import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import SmartphonePreview from '../components/SmartphonePreview.jsx'
import InstagramAdPreview from '../components/InstagramAdPreview.jsx'
import BrowserPreview from '../components/BrowserPreview.jsx'
import { useBrand } from '../context/BrandContext.jsx'

function Services() {
  const { getWhatsAppLink } = useBrand()

  return (
    <section className="services-section py-20 bg-white" id="services">
      <div className="container max-w-[1140px] w-[calc(100%-48px)] mx-auto">
        <h2 className="services-main-title text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] text-[#111827] mb-12 max-[900px]:mb-8">
          Our Services
        </h2>

        {/* 01 · WEBSITE */}
        <div className="service-block grid grid-cols-2 gap-14 items-center mb-20 last:mb-0 max-[900px]:mb-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div className="service-text flex flex-col items-start">
            <span className="service-tag text-[0.8rem] font-bold tracking-[0.08em] text-[#9ca3af] uppercase mb-3">
              01 · WEBSITE
            </span>
            <h3 className="service-title text-[clamp(1.8rem,3.5vw,2.3rem)] font-extrabold tracking-[-0.03em] text-[#111827] mb-4 leading-[1.2]">
              Business Website
            </h3>
            <p className="service-desc text-[1.02rem] leading-[1.65] text-[#4b5563] mb-6">
              A fast, mobile-friendly website with your products, prices and photos in
              one place. Customers browse and order directly on WhatsApp.
            </p>
            <ul className="service-checklist list-none flex flex-col gap-3 mb-7">
              <li className="flex items-center gap-2.5 text-[0.92rem] font-medium text-[#111827]">
                <Check size={18} className="check-icon text-[#22c55e] shrink-0" strokeWidth={2.5} />
                <span>Zero app downloads needed for your customers</span>
              </li>
              <li className="flex items-center gap-2.5 text-[0.92rem] font-medium text-[#111827]">
                <Check size={18} className="check-icon text-[#22c55e] shrink-0" strokeWidth={2.5} />
                <span>Instant click-to-WhatsApp order dispatch</span>
              </li>
              <li className="flex items-center gap-2.5 text-[0.92rem] font-medium text-[#111827]">
                <Check size={18} className="check-icon text-[#22c55e] shrink-0" strokeWidth={2.5} />
                <span>100% Mobile Optimized &amp; Lighting Fast</span>
              </li>
            </ul>
            <a
              className="service-link inline-flex items-center gap-1.5 text-[0.94rem] font-bold text-[#111827] transition-all duration-200 no-underline hover:text-[#22c55e] hover:translate-x-1"
              href={getWhatsAppLink('Hi! I would like to get a business website started.')}
              target="_blank"
              rel="noreferrer"
            >
              <span>Get your website started</span>
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="service-mockup-col flex justify-center">
            <SmartphonePreview />
          </div>
        </div>

        {/* 02 · ADS */}
        <div className="service-block grid grid-cols-2 gap-14 items-center mb-20 last:mb-0 max-[900px]:mb-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div className="service-text flex flex-col items-start">
            <span className="service-tag text-[0.8rem] font-bold tracking-[0.08em] text-[#9ca3af] uppercase mb-3">
              02 · ADS
            </span>
            <h3 className="service-title text-[clamp(1.8rem,3.5vw,2.3rem)] font-extrabold tracking-[-0.03em] text-[#111827] mb-4 leading-[1.2]">
              Instagram Ads
            </h3>
            <p className="service-desc text-[1.02rem] leading-[1.65] text-[#4b5563] mb-6">
              Reach the right audience with targeted ads for your offers and sale videos.
              A call-to-action button sends interested customers straight to your WhatsApp.
            </p>
            <ul className="service-checklist list-none flex flex-col gap-3 mb-7">
              <li className="flex items-center gap-2.5 text-[0.92rem] font-medium text-[#111827]">
                <Check size={18} className="check-icon text-[#22c55e] shrink-0" strokeWidth={2.5} />
                <span>Hyper-local audience targeting around your store</span>
              </li>
              <li className="flex items-center gap-2.5 text-[0.92rem] font-medium text-[#111827]">
                <Check size={18} className="check-icon text-[#22c55e] shrink-0" strokeWidth={2.5} />
                <span>Engaging reels, story &amp; feed ad creatives</span>
              </li>
              <li className="flex items-center gap-2.5 text-[0.92rem] font-medium text-[#111827]">
                <Check size={18} className="check-icon text-[#22c55e] shrink-0" strokeWidth={2.5} />
                <span>Direct-to-WhatsApp conversion funnel</span>
              </li>
            </ul>
            <a
              className="service-link inline-flex items-center gap-1.5 text-[0.94rem] font-bold text-[#111827] transition-all duration-200 no-underline hover:text-[#22c55e] hover:translate-x-1"
              href={getWhatsAppLink('Hi! I want to launch Instagram ad campaigns for my shop.')}
              target="_blank"
              rel="noreferrer"
            >
              <span>Launch ad campaigns</span>
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="service-mockup-col flex justify-center">
            <InstagramAdPreview />
          </div>
        </div>

        {/* 03 · PORTFOLIO */}
        <div className="service-portfolio-card bg-[#111827] text-white rounded-[28px] p-14 max-[900px]:py-9 max-[900px]:px-6">
          <div className="portfolio-grid grid grid-cols-2 gap-12 items-center max-[900px]:grid-cols-1 max-[900px]:gap-9">
            <div className="portfolio-text flex flex-col items-start">
              <span className="service-tag text-[0.8rem] font-bold tracking-[0.08em] text-[#22c55e] uppercase mb-3">
                03 · PORTFOLIO
              </span>
              <h3 className="service-title text-[clamp(1.8rem,3.5vw,2.3rem)] font-extrabold tracking-[-0.03em] text-white mb-4 leading-[1.2]">
                Company portfolio website
              </h3>
              <p className="service-desc text-[1.02rem] leading-[1.65] text-[#94a3b8] mb-6">
                A professional online presence that builds trust and helps new
                customers choose your business.
              </p>
              <div className="portfolio-features-2x2 grid grid-cols-2 gap-x-6 gap-y-4 mt-7">
                <div className="portfolio-feature-item flex items-center gap-2 text-[0.88rem] text-[#cbd5e1]">
                  <span className="portfolio-bullet-dot w-[5px] h-[5px] rounded-full bg-[#22c55e] shrink-0" />
                  <span>Showcases your work &amp; reviews</span>
                </div>
                <div className="portfolio-feature-item flex items-center gap-2 text-[0.88rem] text-[#cbd5e1]">
                  <span className="portfolio-bullet-dot w-[5px] h-[5px] rounded-full bg-[#22c55e] shrink-0" />
                  <span>SEO ready for Google Search</span>
                </div>
                <div className="portfolio-feature-item flex items-center gap-2 text-[0.88rem] text-[#cbd5e1]">
                  <span className="portfolio-bullet-dot w-[5px] h-[5px] rounded-full bg-[#22c55e] shrink-0" />
                  <span>Custom domain &amp; professional email</span>
                </div>
                <div className="portfolio-feature-item flex items-center gap-2 text-[0.88rem] text-[#cbd5e1]">
                  <span className="portfolio-bullet-dot w-[5px] h-[5px] rounded-full bg-[#22c55e] shrink-0" />
                  <span>Fast loading on any 4G/5G connection</span>
                </div>
              </div>
            </div>
            <div className="portfolio-mockup-col flex justify-center">
              <BrowserPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

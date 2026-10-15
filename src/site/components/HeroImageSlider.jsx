import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, Sparkles, Zap } from 'lucide-react'

const SLIDE_DURATION = 4000 // 4 seconds auto-advance

const slides = [
  {
    id: 1,
    src: '/images/team/priyanshu.webp',
    fallback: '/images/team/priyanshu.webp',
    alt: 'Priyanshu - CEO',
    label: 'Slide 1',
    name: 'Priyanshu',
    role: 'CEO',
    objectFit: 'contain', // Transparent cutout: show the whole person, nothing cropped
    objectPosition: 'center bottom',
  },
  {
    id: 2,
    src: '/images/team/JD.webp',
    fallback: '/images/team/JD.webp',
    alt: 'JD - Founder',
    label: 'Slide 2',
    name: 'JD',
    role: 'Founder',
    objectFit: 'contain',
    objectPosition: 'center bottom', // Full body visible, bottom aligned
  },
]

function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  // Autoplay interval every 4s, pauses on hover, cleans up on unmount or slide change
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0))
    }, SLIDE_DURATION)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered, currentIndex])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0))
    }
  }

  const active = slides[currentIndex]

  return (
    <div
      className="relative flex w-full flex-col items-center outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Team photo showcase"
      tabIndex={0}
    >
      {/* Soft glowing green backdrop behind the frame */}
      <div className="hero-slider-glow pointer-events-none absolute -inset-6 -z-10 max-[640px]:-inset-2.5" aria-hidden="true" />

      {/* Gradient ring frame */}
      <div className="hero-slider-ring group w-full max-w-[500px] rounded-[26px] p-[3px] shadow-[0_24px_50px_-12px_rgba(34,197,94,0.28),0_8px_20px_-6px_rgba(17,24,39,0.10)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:rotate-[-0.6deg]">
        <div className="relative h-[380px] w-full overflow-hidden rounded-[23px] bg-[#f8fafc] max-[900px]:h-[340px] max-[640px]:h-auto max-[640px]:aspect-square">
          {/* Slide track */}
          <div
            className="flex h-full w-full will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="relative h-full w-full shrink-0 select-none overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#eef2f7]"
                aria-hidden={currentIndex !== index}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={`hero-slide-img block h-full w-full max-[640px]:transform-none! ${currentIndex === index ? 'is-active' : ''}`}
                  style={{
                    objectFit: slide.objectFit || 'cover',
                    objectPosition: slide.objectPosition || 'center top',
                  }}
                  loading="eager"
                  onError={(e) => {
                    if (slide.fallback && e.currentTarget.src !== slide.fallback) {
                      e.currentTarget.src = slide.fallback
                    }
                  }}
                />

                {/* Bottom scrim + name caption (only on the active slide) */}
                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-[#111827]/75 via-[#111827]/30 to-transparent px-4 pb-3 pt-12 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-[640px]:px-2 max-[640px]:pb-2 max-[640px]:pt-5 ${
                    currentIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                  }`}
                >
                  <div className="text-left">
                    <p className="text-[1.05rem] font-[800] leading-tight tracking-[-0.02em] text-white max-[640px]:text-[0.75rem] max-[640px]:tracking-normal">
                      {slide.name}
                    </p>
                    <p className="mt-0.5 text-[0.78rem] font-medium leading-tight text-white/80 max-[640px]:text-[0.68rem]">
                      {slide.role}
                    </p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 text-[0.68rem] font-semibold text-white backdrop-blur-sm max-[640px]:hidden">
                    <Zap size={12} className="text-[#4ade80]" />
                    Replies in 15 min
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Floating badge above the frame corner — kept off the face */}
        <div className="hero-float-badge pointer-events-none absolute -top-4 left-5 z-10 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#e2e8f0] bg-white/95 px-3 py-1.5 text-[0.72rem] font-semibold text-[#111827] shadow-[0_8px_20px_-6px_rgba(17,24,39,0.18)] backdrop-blur-sm max-[640px]:static max-[640px]:mt-2 max-[640px]:flex max-[640px]:justify-center max-[640px]:gap-1 max-[640px]:border-0 max-[640px]:bg-transparent max-[640px]:px-0 max-[640px]:py-0 max-[640px]:text-[0.6rem] max-[640px]:shadow-none max-[640px]:animate-none!">
          <Sparkles size={13} className="text-[#22c55e] max-[640px]:h-3 max-[640px]:w-3" />
          Real humans, no bots
        </div>
      </div>

      {/* Navigation Dots (below the frame) */}
      <div
        className="mb-4 mt-4 flex items-center justify-center gap-2 max-[640px]:mb-0 max-[640px]:mt-2.5"
        role="tablist"
        aria-label="Slider navigation"
      >
        {slides.map((slide, index) => {
          const isActive = currentIndex === index
          return (
            <button
              key={slide.id}
              type="button"
              className={`h-2 cursor-pointer rounded-full border-none p-0 outline-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-115 focus-visible:outline-2 focus-visible:outline-[#111827] focus-visible:outline-offset-2 ${
                isActive
                  ? 'w-7 bg-gradient-to-r from-[#22c55e] to-[#4ade80] shadow-[0_0_10px_rgba(34,197,94,0.45)]'
                  : 'w-2 bg-[#cbd5e1] hover:bg-[#94a3b8]'
              }`}
              onClick={() => handleDotClick(index)}
              role="tab"
              aria-selected={isActive}
              aria-label={`Show ${slide.label}`}
              title={`Switch to ${slide.label}`}
            />
          )
        })}
        {/* Inline hint next to dots */}
        <span className="ml-2 hidden items-center gap-1.5 text-[0.74rem] font-medium text-[#94a3b8] sm:inline-flex max-[640px]:hidden">
          <MessageCircle size={13} className="text-[#22c55e]" />
          {active.name} &amp; team — ready to help
        </span>
      </div>
    </div>
  )
}

export default HeroImageSlider

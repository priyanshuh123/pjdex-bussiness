import React from 'react'

const steps = [
  {
    number: '1',
    title: 'Share your goals.',
    description: 'Tell us about your business and what you want to achieve.',
  },
  {
    number: '2',
    title: 'We design and launch.',
    description: 'We build your website and ad campaigns, and show you everything before it goes live.',
  },
  {
    number: '3',
    title: 'Get customers.',
    description: 'People find you through ads, visit your website and message you on WhatsApp.',
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works-section py-20 section-tint" id="how-it-works">
      <div className="container max-w-[1140px] w-[calc(100%-48px)] mx-auto">
        <h2 className="how-title text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] text-[#111827] mb-12 max-[900px]:mb-8">How It Works</h2>
        <div className="steps-container grid grid-cols-3 gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="step-item flex flex-col items-start bg-white rounded-[20px] border border-[#e2e8f0] p-7">
              <div className="step-num-circle w-9 h-9 rounded-full bg-[#111827] text-white flex items-center justify-center text-[0.95rem] font-[750] mb-5">{step.number}</div>
              <h3 className="step-heading text-[1.25rem] font-[750] text-[#111827] mb-2">{step.title}</h3>
              <p className="step-text text-[0.96rem] leading-[1.6] text-[#4b5563]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

import React, { useState } from 'react'
import { MessageSquare, User, Zap } from 'lucide-react'
import { useBrand } from '../context/BrandContext.jsx'

function Avatar({ src, alt, label }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="team-avatar-ring mb-6">
      <div
        className={`team-avatar-wrap w-[128px] h-[128px] rounded-full bg-white flex flex-col items-center justify-center text-[#94a3b8] overflow-hidden border-2 ${
          failed ? 'border-dashed border-[#cbd5e1]' : 'border-white'
        }`}
      >
        {failed ? (
          <>
            <User size={44} strokeWidth={1.5} />
            <span className="avatar-placeholder-label text-[0.68rem] text-[#94a3b8] mt-1 font-semibold">
              {label}
            </span>
          </>
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}

function TeamMember({ name, role, image, chip, buttonLabel, href }) {
  return (
    <div className="team-member-card relative bg-white border border-[#e2e8f0] rounded-[28px] py-12 px-8 flex flex-col items-center text-center overflow-hidden">
      <span className="team-card-accent" aria-hidden="true" />
      <Avatar src={image} alt={name} label={name} />
      <h3 className="team-member-name text-[1.35rem] font-[750] text-[#111827] mb-1.5">{name}</h3>
      <span className="team-role-pill inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#166534] bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-3 py-1 mb-5">
        {role}
      </span>
      <span className="team-chip inline-flex items-center gap-1.5 text-[0.78rem] text-[#4b5563] mb-7">
        <Zap size={13} className="text-[#22c55e]" />
        {chip}
      </span>
      <a
        className="team-chat-btn inline-flex items-center gap-2 bg-white text-[#111827] border border-[#e2e8f0] py-[10px] px-6 rounded-full text-[0.88rem] font-semibold cursor-pointer transition-all duration-200 no-underline hover:border-[#22c55e] hover:bg-[#22c55e] hover:text-white hover:shadow-[0_8px_20px_-6px_rgba(34,197,94,0.5)]"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <MessageSquare size={15} />
        <span>{buttonLabel}</span>
      </a>
    </div>
  )
}

function Team() {
  const { brand, getWhatsAppLink } = useBrand()

  return (
    <section className="team-section py-20 bg-white relative overflow-hidden" id="team">
      <div className="container max-w-[1140px] w-[calc(100%-48px)] mx-auto relative z-[1]">
        <div className="team-header-block mb-14 text-center">
          <h2 className="team-main-title text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] text-[#111827] mb-2">
            Meet the Team
          </h2>
          <p className="team-subtitle text-[1.05rem] text-[#4b5563]">
            You will talk directly with both of us.
          </p>
        </div>

        <div className="team-cards-grid grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
          <TeamMember
            name="JD"
            role="Founder"
            image="/images/team/JD.webp"
            chip="Growth & ads — replies in minutes"
            buttonLabel="Chat with JD"
            href={getWhatsAppLink(
              'Hi JD! I would like to talk directly about marketing and growth for my store.',
              brand.friendWhatsappRaw
            )}
          />

          <TeamMember
            name={brand.teamUserName || 'Priyanshu'}
            role="CEO"
            image="/images/team/priyanshu.webp"
            chip="Websites & builds — replies in minutes"
            buttonLabel="Chat with Priyanshu"
            href={getWhatsAppLink(
              'Hi Priyanshu! I would like to chat about building a website for my business.',
              brand.whatsappRaw
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default Team

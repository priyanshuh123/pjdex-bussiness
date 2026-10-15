import React, { useState } from 'react'
import { Play, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react'

// Image: business-landing-page/public/images/intagram-ads.png
// Agar extension .jpg / .jpeg / .webp hai ya naam alag hai, to sirf ye line badlo
const AD_IMAGE = '/images/intagram-ads.webp'
const SHOP_NAME = 'Maha Discount Mobile Hub'

function InstagramAdPreview() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className="instagram-mockup-wrapper flex justify-center w-full">
      <div className="ig-card w-[360px] max-w-full bg-white border border-[#e2e8f0] rounded-[28px] overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
        <div className="ig-header flex items-center justify-between py-3 px-4 border-b border-[#f8fafc]">
          <div className="ig-profile-info flex items-center gap-2.5">
            <div className="ig-avatar-badge w-[30px] h-[30px] rounded-full bg-[#111827] text-white text-[0.65rem] font-bold flex items-center justify-center">
              IG
            </div>
            <div>
              <div className="ig-username text-[0.78rem] font-[750] text-[#111827] leading-[1.1]">
                {SHOP_NAME}
              </div>
              <div className="ig-subtext text-[0.68rem] text-[#94a3b8]">
                Sponsored
              </div>
            </div>
          </div>
          <div className="ig-more-dots text-[#94a3b8] text-base">
            <MoreHorizontal size={16} />
          </div>
        </div>

        {/* Ad image — falls back to placeholder only if the file fails to load */}
        <div className="ig-media-area bg-[#f1f5f9] relative overflow-hidden">
          {!imageFailed ? (
            <img
              src={AD_IMAGE}
              alt="Instagram Ad Creative"
              className="w-full h-auto max-h-[450px] object-cover block"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="h-[220px] flex flex-col items-center justify-center text-[#64748b]">
              <div className="play-circle-icon w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-[#111827] mb-2">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="media-label text-[0.74rem] font-[750] text-[#475569] tracking-[0.02em]">[SALE VIDEO / PHOTO]</span>
              <span className="media-sublabel text-[0.65rem] text-[#94a3b8] mt-0.5">High-Converting Ad Creative</span>
            </div>
          )}
        </div>

        <div className="ig-actions-row flex items-center justify-between py-2.5 px-4 pb-1.5 text-[#111827]">
          <div className="ig-actions-left flex items-center gap-3.5">
            <Heart size={18} strokeWidth={2} />
            <MessageCircle size={18} strokeWidth={2} />
            <Send size={18} strokeWidth={2} />
          </div>
          <Bookmark size={18} strokeWidth={2} />
        </div>

        <div className="ig-bottom-bar flex items-center justify-between py-2 px-4 pb-3.5">
          <span className="ig-caption text-[0.78rem] font-medium text-[#111827]">New arrivals. Best prices.</span>
          <span className="ig-whatsapp-cta bg-[#22c55e] text-white text-[0.72rem] font-semibold py-1 px-2.5 rounded-full inline-flex items-center gap-1">
            <MessageCircle size={11} fill="currentColor" />
            WhatsApp
          </span>
        </div>
      </div>
    </div>
  )
}

export default InstagramAdPreview
import React from 'react'
import { ShieldCheck, Activity } from 'lucide-react'

function BrowserPreview() {
  return (
    <div className="browser-window-mockup bg-[#1a2234] border border-[#2d3748] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)] w-full">
      <div className="browser-header-bar flex items-center justify-between py-2.5 px-3.5 bg-[#141c2b] border-b border-[#2d3748]">
        <div className="window-dots flex items-center gap-1.5">
          <span className="window-dot dot-red w-[9px] h-[9px] rounded-full bg-[#ef4444]" />
          <span className="window-dot dot-yellow w-[9px] h-[9px] rounded-full bg-[#f59e0b]" />
          <span className="window-dot dot-green w-[9px] h-[9px] rounded-full bg-[#10b981]" />
        </div>
        <span className="browser-address text-[0.7rem] text-[#94a3b8] font-mono">yourbusiness.com</span>
        <div style={{ width: '40px' }} />
      </div>

      <div className="browser-body p-6 pb-5 bg-[#111827] flex flex-col gap-[18px]">
        <div className="wireframe-skeleton flex flex-col gap-2">
          <div className="skeleton-bar-long h-2.5 bg-[#1f293d] rounded w-[65%]" />
          <div className="skeleton-bar-medium h-2 bg-[#1a2336] rounded w-[45%]" />
          <div className="skeleton-bar-short h-2 bg-[#1a2336] rounded w-[30%]" />
        </div>

        <div className="browser-badges-row flex items-center gap-5 pt-3 border-t border-[#1f293d]">
          <div className="badge-item highlight inline-flex items-center gap-1.5 text-[0.72rem] text-[#34d399] font-medium">
            <ShieldCheck size={14} />
            <span>100% Trust Certified</span>
          </div>
          <div className="badge-item highlight inline-flex items-center gap-1.5 text-[0.72rem] text-[#34d399] font-medium">
            <Activity size={14} />
            <span>24/7 Live</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowserPreview


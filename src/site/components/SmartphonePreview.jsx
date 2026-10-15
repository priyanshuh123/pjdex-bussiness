import React from 'react'
import {
  Search, ShoppingCart, Menu, MapPin, MessageCircle,
  Smartphone, Headphones, BatteryCharging, Zap,
  Shield, Watch, Wrench, ChevronRight, Home,
  LayoutGrid, Heart
} from 'lucide-react'

const SHOP_PHONE = '' // configurable – leave empty for wa.me without number

function getWaLink(msg) {
  const num = SHOP_PHONE.replace(/\D/g, '')
  return `https://wa.me/${num ? num : ''}?text=${encodeURIComponent(msg)}`
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const brands = [
  { id: 'apple', name: 'Apple', letter: '' },
  { id: 'samsung', name: 'Samsung', letter: 'S' },
  { id: 'xiaomi', name: 'Xiaomi', letter: 'Xi' },
  { id: 'vivo', name: 'Vivo', letter: 'V' },
  { id: 'oppo', name: 'OPPO', letter: 'O' },
  { id: 'realme', name: 'realme', letter: 'r' },
]

const categories = [
  { id: 'phones', name: 'Smartphones', icon: Smartphone },
  { id: 'earbuds', name: 'Earbuds', icon: Headphones },
  { id: 'chargers', name: 'Chargers', icon: Zap },
  { id: 'powerbanks', name: 'Power Banks', icon: BatteryCharging },
  { id: 'covers', name: 'Covers', icon: Shield },
  { id: 'watches', name: 'Smartwatches', icon: Watch },
  { id: 'repair', name: 'Repair', icon: Wrench },
]

const bestSellers = [
  { id: 1, name: 'iPhone 15', spec: '128 GB', price: '₹62,999', old: '₹69,900', color: '#1a1a2e' },
  { id: 2, name: 'Galaxy S24', spec: '128 GB', price: '₹57,999', old: '₹74,999', color: '#1b2a4a' },
  { id: 3, name: 'Redmi Note 13', spec: '128 GB', price: '₹14,999', old: '₹17,999', color: '#0d3320' },
]

const accessories = [
  { id: 10, name: 'Wireless Earbuds', price: '₹1,299', old: '₹2,499' },
  { id: 11, name: '65 W Charger', price: '₹899', old: '₹1,499' },
  { id: 12, name: '20000 mAh Power Bank', price: '₹1,499', old: '₹2,299' },
]

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

function SmartphonePreview() {
  return (
    <div className="smp-wrapper flex justify-center">
      {/* ---- iPhone-style outer chassis ---- */}
      <div className="smp-chassis w-[310px] max-[900px]:w-[280px] max-[640px]:w-[260px] bg-[#111827] rounded-[44px] p-2.5 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.22),0_18px_36px_-18px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_#1e293b] relative flex flex-col">
        {/* notch / dynamic island */}
        <div className="smp-notch absolute top-3.5 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-[14px] z-20 flex items-center justify-center">
          <span className="smp-notch-cam w-2 h-2 rounded-full bg-[#1a2234] border border-[#2d3748]" />
        </div>

        {/* Screen container */}
        <div className="smp-screen w-full h-[580px] max-[900px]:h-[520px] max-[640px]:h-[480px] bg-white rounded-[36px] overflow-hidden flex flex-col relative [transform:translateZ(0)]">
          {/* Scrollable body content */}
          <div className="smp-screen-body flex-1 w-full overflow-y-auto overflow-x-hidden scroll-smooth pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:w-0">
            {/* ===== STORE HEADER ===== */}
            <div className="smp-store-header flex items-center justify-between py-2.5 px-3.5 pb-2 bg-white sticky top-0 z-10 border-b border-[#f1f5f9]">
              <div className="smp-store-info flex items-center gap-2">
                <div className="smp-store-logo w-7 h-7 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#15803d] text-white text-[0.55rem] font-extrabold flex items-center justify-center shrink-0">SM</div>
                <div>
                  <div className="smp-store-name text-[0.62rem] font-bold text-[#0f172a] leading-[1.2]">Sharma Mobile Store</div>
                  <div className="smp-store-location text-[0.48rem] text-[#64748b] flex items-center gap-0.5">
                    <MapPin size={8} /> Bikaner, Rajasthan
                  </div>
                </div>
              </div>
              <div className="smp-header-icons flex items-center gap-2 text-[#475569]">
                <Search size={13} strokeWidth={2} />
                <div className="smp-cart-wrap relative">
                  <ShoppingCart size={13} strokeWidth={2} />
                  <span className="smp-cart-badge absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#ef4444] text-white text-[0.42rem] font-bold flex items-center justify-center">2</span>
                </div>
                <Menu size={13} strokeWidth={2} />
              </div>
            </div>

            {/* WhatsApp contact strip */}
            <a
              className="smp-wa-strip flex items-center justify-center gap-1.5 bg-[#f0fdf4] text-[#16a34a] text-[0.52rem] font-semibold py-1 px-3 mx-2.5 mt-2 rounded-md border border-[#bbf7d0] no-underline transition-colors hover:bg-[#dcfce7]"
              href={getWaLink('Hi! I want to check product availability.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={10} fill="currentColor" />
              <span>Chat with us on WhatsApp</span>
            </a>

            {/* ===== HERO BANNER ===== */}
            <div className="smp-hero-banner mx-2.5 mt-2 p-3 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl text-white flex flex-col gap-1.5 relative overflow-hidden">
              <div className="smp-hero-text flex flex-col">
                <span className="smp-hero-badge-text text-[0.45rem] font-extrabold tracking-[0.08em] text-[#22c55e] uppercase">NEW ARRIVALS</span>
                <strong className="smp-hero-title text-[0.78rem] font-extrabold leading-[1.15]">Latest Smartphones</strong>
                <span className="smp-hero-sub text-[0.48rem] text-[#94a3b8] leading-[1.3]">Explore Mobiles, Accessories &amp; Best Deals</span>
              </div>
              <a
                className="smp-hero-cta inline-flex items-center gap-1 bg-[#22c55e] text-white text-[0.5rem] font-bold py-1 px-2.5 rounded-full w-fit mt-1 shadow-[0_2px_8px_rgba(34,197,94,0.3)] hover:bg-[#16a34a] no-underline"
                href={getWaLink('Hi! I want to order a smartphone.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={9} fill="currentColor" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* ===== BRANDS ===== */}
            <div className="smp-section-head flex items-center justify-between px-3 mt-3 mb-1.5">
              <span className="smp-sec-title text-[0.6rem] font-bold text-[#0f172a] tracking-[-0.01em]">Top Brands</span>
            </div>
            <div className="smp-brands-row flex items-center gap-1.5 px-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:w-0">
              {brands.map((b) => (
                <div key={b.id} className="smp-brand-chip flex items-center gap-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-full py-1 px-2 shrink-0 cursor-pointer hover:bg-[#f1f5f9]">
                  <div className={`smp-brand-icon smp-brand-${b.id} w-3.5 h-3.5 flex items-center justify-center`}>
                    {b.id === 'apple' ? (
                      <svg width="12" height="14" viewBox="0 0 14 17" fill="currentColor">
                        <path d="M13.2 12.6c-.4.9-.6 1.3-1.1 2.1-.7 1-1.6 2.3-2.8 2.3-1.1 0-1.3-.7-2.8-.7-1.4 0-1.8.7-2.8.7-1.2 0-2-1.1-2.8-2.2C-.3 12.4-.6 9.6.6 8.1c.9-1.1 2.2-1.7 3.4-1.7 1.3 0 2.1.7 3.1.7 1 0 1.6-.7 3.1-.7 1.1 0 2.2.5 3 1.4-2.6 1.4-2.2 5.1.4 6.3-.1 0 0 0 0 0zM9.5 4.2c.5-.7.9-1.6.8-2.6-.9.1-1.9.6-2.5 1.3-.5.6-1 1.6-.8 2.5 1 0 1.9-.5 2.5-1.2z"/>
                      </svg>
                    ) : (
                      <span className="smp-brand-letter text-[0.52rem] font-extrabold text-[#334155]">{b.letter}</span>
                    )}
                  </div>
                  <span className="smp-brand-name text-[0.48rem] font-semibold text-[#334155]">{b.name}</span>
                </div>
              ))}
            </div>

            {/* ===== CATEGORIES ===== */}
            <div className="smp-section-head flex items-center justify-between px-3 mt-3 mb-1.5">
              <span className="smp-sec-title text-[0.6rem] font-bold text-[#0f172a] tracking-[-0.01em]">Shop by Category</span>
            </div>
            <div className="smp-categories-grid grid grid-cols-4 gap-1.5 px-2.5">
              {categories.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.id} className="smp-cat-item flex flex-col items-center gap-1 bg-[#f8fafc] border border-[#f1f5f9] rounded-lg p-1.5 cursor-pointer hover:bg-[#f1f5f9] hover:border-[#e2e8f0]">
                    <div className="smp-cat-icon-wrap w-6 h-6 rounded-md bg-white border border-[#e2e8f0] flex items-center justify-center text-[#334155]">
                      <Icon size={14} strokeWidth={1.8} />
                    </div>
                    <span className="smp-cat-name text-[0.44rem] font-semibold text-[#475569] text-center leading-[1.1]">{c.name}</span>
                  </div>
                )
              })}
            </div>

            {/* ===== BEST SELLERS ===== */}
            <div className="smp-section-head flex items-center justify-between px-3 mt-3 mb-1.5">
              <span className="smp-sec-title text-[0.6rem] font-bold text-[#0f172a] tracking-[-0.01em]">Best Selling Mobiles</span>
              <span className="smp-view-all text-[0.48rem] font-semibold text-[#22c55e] flex items-center gap-0.5 cursor-pointer">View All <ChevronRight size={10} /></span>
            </div>
            <div className="smp-products-scroll flex gap-2 px-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:w-0">
              {bestSellers.map((p) => (
                <div key={p.id} className="smp-product-card w-[110px] shrink-0 bg-white border border-[#e2e8f0] rounded-xl overflow-hidden flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="smp-product-img-area h-[78px] flex items-center justify-center relative" style={{ background: p.color }}>
                    <Smartphone size={28} strokeWidth={1} color="#ffffff" />
                    <button className="smp-wishlist-btn absolute top-1 right-1 w-4 h-4 rounded-full bg-black/30 text-white border-none flex items-center justify-center cursor-pointer hover:bg-black/50" type="button" aria-label="Add to wishlist">
                      <Heart size={10} strokeWidth={2} />
                    </button>
                  </div>
                  <div className="smp-product-info p-2 flex flex-col gap-0.5 flex-1">
                    <span className="smp-product-name text-[0.55rem] font-bold text-[#0f172a] leading-[1.2]">{p.name}</span>
                    <span className="smp-product-spec text-[0.45rem] text-[#64748b]">{p.spec}</span>
                    <div className="smp-price-row flex items-center gap-1 mt-0.5">
                      <span className="smp-price-now text-[0.58rem] font-extrabold text-[#0f172a]">{p.price}</span>
                      <span className="smp-price-old text-[0.46rem] text-[#94a3b8] line-through">{p.old}</span>
                    </div>
                    <a
                      className="smp-order-btn inline-flex items-center justify-center gap-1 bg-[#22c55e] text-white text-[0.48rem] font-bold py-1 px-1.5 rounded-md mt-1.5 no-underline hover:bg-[#16a34a]"
                      href={getWaLink(`Hi! I want to order ${p.name} (${p.spec}).`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={8} fill="currentColor" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== ACCESSORIES ===== */}
            <div className="smp-section-head flex items-center justify-between px-3 mt-3 mb-1.5">
              <span className="smp-sec-title text-[0.6rem] font-bold text-[#0f172a] tracking-[-0.01em]">Accessories</span>
              <span className="smp-view-all text-[0.48rem] font-semibold text-[#22c55e] flex items-center gap-0.5 cursor-pointer">View All <ChevronRight size={10} /></span>
            </div>
            <div className="smp-products-scroll flex gap-2 px-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:w-0">
              {accessories.map((a) => (
                <div key={a.id} className="smp-product-card smp-acc-card w-[96px] shrink-0 bg-white border border-[#e2e8f0] rounded-xl overflow-hidden flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="smp-product-img-area smp-acc-img h-[60px] bg-[#f8fafc] flex items-center justify-center relative">
                    <Headphones size={22} strokeWidth={1.2} color="#64748b" />
                  </div>
                  <div className="smp-product-info p-2 flex flex-col gap-0.5 flex-1">
                    <span className="smp-product-name text-[0.55rem] font-bold text-[#0f172a] leading-[1.2]">{a.name}</span>
                    <div className="smp-price-row flex items-center gap-1 mt-0.5">
                      <span className="smp-price-now text-[0.58rem] font-extrabold text-[#0f172a]">{a.price}</span>
                      <span className="smp-price-old text-[0.46rem] text-[#94a3b8] line-through">{a.old}</span>
                    </div>
                    <a
                      className="smp-order-btn smp-add-cart-btn inline-flex items-center justify-center gap-1 bg-[#0f172a] text-white text-[0.48rem] font-bold py-1 px-1.5 rounded-md mt-1.5 no-underline hover:bg-[#1e293b]"
                      href={getWaLink(`Hi! I want to order ${a.name}.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ShoppingCart size={8} />
                      <span>Add to Cart</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Padding at bottom of scrollable list so last item isn't flush */}
            <div style={{ height: '16px' }} />
          </div>

          {/* ===== BOTTOM NAV BAR (Clean docked bar) ===== */}
          <div className="smp-bottom-nav flex items-center justify-around bg-white border-t border-[#f1f5f9] pt-2 pb-2.5 relative z-10 shrink-0 w-full">
            <div className="smp-nav-item smp-nav-active flex flex-col items-center gap-0.5 text-[#22c55e] cursor-pointer text-[0.4rem] font-semibold">
              <Home size={14} strokeWidth={2} />
              <span>Home</span>
            </div>
            <div className="smp-nav-item flex flex-col items-center gap-0.5 text-[#94a3b8] cursor-pointer text-[0.4rem] font-semibold">
              <LayoutGrid size={14} strokeWidth={2} />
              <span>Categories</span>
            </div>
            <div className="smp-nav-item flex flex-col items-center gap-0.5 text-[#94a3b8] cursor-pointer text-[0.4rem] font-semibold">
              <div className="smp-nav-cart-wrap relative">
                <ShoppingCart size={14} strokeWidth={2} />
                <span className="smp-nav-cart-badge absolute -top-1 -right-1.5 w-2.5 h-2.5 rounded-full bg-[#ef4444] text-white text-[0.35rem] font-bold flex items-center justify-center">2</span>
              </div>
              <span>Cart</span>
            </div>
            <div className="smp-nav-item flex flex-col items-center gap-0.5 text-[#94a3b8] cursor-pointer text-[0.4rem] font-semibold">
              <MessageCircle size={14} strokeWidth={2} />
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartphonePreview

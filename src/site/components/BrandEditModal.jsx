import React, { useState } from 'react'
import { X, RotateCcw, Check } from 'lucide-react'
import { useBrand } from '../context/BrandContext.jsx'

function BrandEditModal() {
  const { brand, updateBrand, resetBrand, isModalOpen, setIsModalOpen } = useBrand()
  const [formData, setFormData] = useState({ ...brand })
  React.useEffect(() => { if (isModalOpen) setFormData({ ...brand }) }, [isModalOpen])

  if (!isModalOpen) return null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    updateBrand(formData)
    setIsModalOpen(false)
  }

  const handleReset = () => {
    resetBrand()
    setIsModalOpen(false)
  }

  return (
    <div className="modal-overlay fixed inset-0 bg-black/65 backdrop-blur-md z-[200] flex items-center justify-center p-5" onClick={() => setIsModalOpen(false)}>
      <div className="modal-card bg-white rounded-[28px] max-w-[580px] w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e2e8f0]" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header flex items-center justify-between p-5 px-6 border-b border-[#e2e8f0]">
          <h3 className="text-[1.15rem] font-[750] text-[#111827]">Edit Brand Details &amp; Placeholders</h3>
          <button
            type="button"
            className="modal-close-btn bg-transparent border-none cursor-pointer text-[#4b5563] flex items-center justify-center p-1 rounded-md transition-all duration-150 hover:bg-[#f8fafc] hover:text-[#111827]"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSave}>
          <div className="modal-body p-6 flex flex-col gap-[18px]">
            <div className="modal-toggle-box flex items-center justify-between p-3.5 px-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-[14px]">
              <div>
                <div className="modal-toggle-text text-[0.88rem] font-semibold text-[#111827]">Use Bracketed PDF Placeholders</div>
                <div className="modal-toggle-sub text-[0.76rem] text-[#4b5563] mt-0.5">Shows [COMPANY NAME], [YOUR PHOTO], etc. as seen in design portfolio</div>
              </div>
              <input
                type="checkbox"
                name="usePlaceholders"
                checked={formData.usePlaceholders}
                onChange={handleChange}
                className="w-[18px] h-[18px] cursor-pointer"
              />
            </div>

            <div className="modal-toggle-box flex items-center justify-between p-3.5 px-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-[14px]">
              <div>
                <div className="modal-toggle-text text-[0.88rem] font-semibold text-[#111827]">Show Real Photos for Team &amp; Mockup</div>
                <div className="modal-toggle-sub text-[0.76rem] text-[#4b5563] mt-0.5">Switches placeholder icons to your images (Priyanshu &amp; Partner)</div>
              </div>
              <input
                type="checkbox"
                name="showRealPhotos"
                checked={formData.showRealPhotos}
                onChange={handleChange}
                className="w-[18px] h-[18px] cursor-pointer"
              />
            </div>

            <div className="form-group flex flex-col gap-1.5">
              <label className="text-[0.78rem] font-semibold text-[#4b5563] uppercase tracking-[0.03em]">Company / Agency Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="[COMPANY NAME]"
                className="py-2.5 px-3.5 border border-[#e2e8f0] rounded-lg text-[0.9rem] text-[#111827] transition-colors duration-150 outline-none focus:border-[#111827]"
              />
            </div>

            <div className="form-row grid grid-cols-2 gap-4 max-[500px]:grid-cols-1">
              <div className="form-group flex flex-col gap-1.5">
                <label className="text-[0.78rem] font-semibold text-[#4b5563] uppercase tracking-[0.03em]">WhatsApp Display Number</label>
                <input
                  type="text"
                  name="whatsappDisplay"
                  value={formData.whatsappDisplay}
                  onChange={handleChange}
                  placeholder="[WHATSAPP NUMBER]"
                  className="py-2.5 px-3.5 border border-[#e2e8f0] rounded-lg text-[0.9rem] text-[#111827] transition-colors duration-150 outline-none focus:border-[#111827]"
                />
              </div>
              <div className="form-group flex flex-col gap-1.5">
                <label className="text-[0.78rem] font-semibold text-[#4b5563] uppercase tracking-[0.03em]">Actual Phone (wa.me link)</label>
                <input
                  type="text"
                  name="whatsappRaw"
                  value={formData.whatsappRaw}
                  onChange={handleChange}
                  placeholder="919876543210"
                  className="py-2.5 px-3.5 border border-[#e2e8f0] rounded-lg text-[0.9rem] text-[#111827] transition-colors duration-150 outline-none focus:border-[#111827]"
                />
              </div>
            </div>

            <div className="form-row grid grid-cols-2 gap-4 max-[500px]:grid-cols-1">
              <div className="form-group flex flex-col gap-1.5">
                <label className="text-[0.78rem] font-semibold text-[#4b5563] uppercase tracking-[0.03em]">Instagram Handle</label>
                <input
                  type="text"
                  name="instagramHandle"
                  value={formData.instagramHandle}
                  onChange={handleChange}
                  placeholder="@[HANDLE]"
                  className="py-2.5 px-3.5 border border-[#e2e8f0] rounded-lg text-[0.9rem] text-[#111827] transition-colors duration-150 outline-none focus:border-[#111827]"
                />
              </div>
              <div className="form-group flex flex-col gap-1.5">
                <label className="text-[0.78rem] font-semibold text-[#4b5563] uppercase tracking-[0.03em]">Demo Shop Name</label>
                <input
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="[SHOP NAME]"
                  className="py-2.5 px-3.5 border border-[#e2e8f0] rounded-lg text-[0.9rem] text-[#111827] transition-colors duration-150 outline-none focus:border-[#111827]"
                />
              </div>
            </div>

            <div className="form-row grid grid-cols-2 gap-4 max-[500px]:grid-cols-1">
              <div className="form-group flex flex-col gap-1.5">
                <label className="text-[0.78rem] font-semibold text-[#4b5563] uppercase tracking-[0.03em]">Priyanshu Role / Title</label>
                <input
                  type="text"
                  name="priyanshuRole"
                  value={formData.priyanshuRole}
                  onChange={handleChange}
                  placeholder="[YOUR POSITION]"
                  className="py-2.5 px-3.5 border border-[#e2e8f0] rounded-lg text-[0.9rem] text-[#111827] transition-colors duration-150 outline-none focus:border-[#111827]"
                />
              </div>
              <div className="form-group flex flex-col gap-1.5">
                <label className="text-[0.78rem] font-semibold text-[#4b5563] uppercase tracking-[0.03em]">Partner / Friend Name</label>
                <input
                  type="text"
                  name="friendName"
                  value={formData.friendName}
                  onChange={handleChange}
                  placeholder="[FRIEND NAME]"
                  className="py-2.5 px-3.5 border border-[#e2e8f0] rounded-lg text-[0.9rem] text-[#111827] transition-colors duration-150 outline-none focus:border-[#111827]"
                />
              </div>
            </div>

            <div className="form-group flex flex-col gap-1.5">
              <label className="text-[0.78rem] font-semibold text-[#4b5563] uppercase tracking-[0.03em]">Partner / Friend Role</label>
              <input
                type="text"
                name="friendRole"
                value={formData.friendRole}
                onChange={handleChange}
                placeholder="[FRIEND POSITION]"
                className="py-2.5 px-3.5 border border-[#e2e8f0] rounded-lg text-[0.9rem] text-[#111827] transition-colors duration-150 outline-none focus:border-[#111827]"
              />
            </div>
          </div>

          <div className="modal-footer flex items-center justify-end gap-3 py-[18px] px-6 border-t border-[#e2e8f0] bg-[#f8fafc] rounded-b-[28px]">
            <button
              type="button"
              className="btn-outline inline-flex items-center justify-center gap-2 bg-transparent text-[#111827] border border-[#e2e8f0] font-semibold py-[11px] px-6 rounded-full cursor-pointer transition-all hover:bg-black/5 hover:border-[#111827]"
              onClick={handleReset}
            >
              <RotateCcw size={14} /> Reset Defaults
            </button>
            <button type="submit" className="btn-green inline-flex items-center justify-center gap-2 bg-[#22c55e] text-white font-semibold py-[11px] px-6 rounded-full border-none cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_14px_rgba(34,197,94,0.25)] hover:bg-[#16a34a] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(34,197,94,0.35)]">
              <Check size={16} /> Save &amp; Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BrandEditModal


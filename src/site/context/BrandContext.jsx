import React, { createContext, useContext, useState, useEffect } from 'react'

const BrandContext = createContext()

const STORAGE_KEY = 'portfolio_brand_settings_v2'

const defaultBrand = {
  companyName: 'PJDex Growth Marketing',
  companyLogo: '/images/pjdex-logo.png',
  whatsappNumber: '+91 83022 84569',
  whatsappRaw: '918302284569', // Priyanshu (main number)
  friendWhatsappRaw: '917878496344', // JD
  whatsappDisplay: '+91 83022 84569',
  instagramHandle: '@[HANDLE]',
  shopName: '[SHOP NAME]',
  userPhotoLabel: '[YOUR PHOTO]',
  friendPhotoLabel: '[FRIEND PHOTO]',
  priyanshuRole: '[YOUR POSITION]',
  friendName: '[FRIEND NAME]',
  friendRole: '[FRIEND POSITION]',
  usePlaceholders: true, // When true, shows [COMPANY NAME], etc. exactly like the PDF!
  showRealPhotos: false,
}

export function BrandProvider({ children }) {
  const [brand, setBrand] = useState(defaultBrand)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setBrand({ ...defaultBrand, ...JSON.parse(saved) })
    } catch {
      // ignore
    }
    setLoaded(true)
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(brand))
    } catch {
      // ignore
    }
  }, [brand, loaded])

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== STORAGE_KEY) return
      try {
        const next = e.newValue ? { ...defaultBrand, ...JSON.parse(e.newValue) } : defaultBrand
        setBrand((prev) => (JSON.stringify(prev) === JSON.stringify(next) ? prev : next))
      } catch {
        // ignore
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const updateBrand = (updates) => {
    setBrand((prev) => ({ ...prev, ...updates }))
  }

  const resetBrand = () => {
    setBrand(defaultBrand)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  // getWhatsAppLink('message')            -> Priyanshu's number
  // getWhatsAppLink('message', '9178...') -> that specific number
  const getWhatsAppLink = (
    message = 'Hi! I would like to talk about growing my business online.',
    phone = ''
  ) => {
    const rawNumber = (phone || brand.whatsappRaw || '918302284569').replace(/\D/g, '')
    const encodedMsg = encodeURIComponent(message)
    return `https://wa.me/${rawNumber}?text=${encodedMsg}`
  }

  return (
    <BrandContext.Provider
      value={{
        brand,
        updateBrand,
        resetBrand,
        isModalOpen,
        setIsModalOpen,
        getWhatsAppLink,
      }}
    >
      {children}
    </BrandContext.Provider>
  )
}

export function useBrand() {
  const context = useContext(BrandContext)
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider')
  }
  return context
}
export function getWhatsAppUrl(message, overridePhone = '') {
  const envPhone = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') || '8302284569'
  const phoneNumber = overridePhone.replace(/\D/g, '') || envPhone
  const query = new URLSearchParams({ text: message || 'Hi! I would like to grow my business online.' })
  const phonePath = phoneNumber ? `/${phoneNumber}` : ''

  return `https://wa.me${phonePath}?${query.toString()}`
}

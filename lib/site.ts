// The PK Events - central site configuration.
// Update WHATSAPP_NUMBER with your business WhatsApp number in international
// format (country code, no plus sign, no spaces). Example: 923001234567
export const WHATSAPP_NUMBER = '923000000000'

export const CITIES = [
  'Faisalabad',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Karachi',
  'Multan',
  'Gujranwala',
  'Sialkot',
] as const

export type City = (typeof CITIES)[number]

// Builds a WhatsApp click-to-chat link with a pre-filled Roman Urdu message.
export function buildWhatsAppLink(packageName: string, city?: string) {
  const target = city && city.length > 0 ? city : 'apne shehar'
  const message = `Hi, mujhe ${target} mein ${packageName} ki availability check karni hai.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// Generic opener message for header / closing CTAs.
export function buildGeneralWhatsAppLink(intent = 'apne event ke liye Gorilla Entrance book') {
  const message = `Hi The PK Events, mujhe ${intent} karni hai. Please rates aur availability share karein.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// The PK Events - Central Site Configuration
// Update WHATSAPP_NUMBER with your business WhatsApp number in international format.
export const WHATSAPP_NUMBER = '923000000000'

// Recalibrated National Coverage Network (Punjab, KP & Nationwide On-Demand)
export const CITIES = [
  'Faisalabad (HQ)',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Multan',
  'Sargodha',
  'Gujranwala',
  'Sialkot',
  'Peshawar',
  'Bahawalpur',
  '+ All Pakistan (On-Demand)',
] as const

export type City = (typeof CITIES)[number]

/**
 * Builds a dynamic WhatsApp click-to-chat link with pre-filled Roman Urdu message.
 */
export function buildWhatsAppLink(packageName: string, city?: string) {
  const target = city && city.length > 0 ? city : 'apne shehar'
  const message = `Assalam-o-Alaikum The PK Events! Mujhe ${target} mein ${packageName} ki date availability aur booking details confirm karni hain.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Generic opener message for Navbar, Hero & Closing CTA buttons.
 */
export function buildGeneralWhatsAppLink(intent = 'apne event ke liye Gorilla Entrance & Media Coverage book') {
  const message = `Assalam-o-Alaikum The PK Events, mujhe ${intent} karni hai. Please date availability aur package rates share kar dein.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Advanced Configurator WhatsApp Message Generator
 * Direct deep-linking trigger for Step 4 Interactive Configurator
 */
export interface ConfiguratorPayload {
  selectedDate?: string
  city?: string
  guestScale?: string
  mascotCount?: number
  videographers?: number
  photographers?: number
  hasDrone?: boolean
  hasAlbum?: boolean
  totalPrice?: number
}

export function buildConfiguratorWhatsAppLink(data: ConfiguratorPayload) {
  const dateStr = data.selectedDate || 'Not Selected'
  const cityStr = data.city || 'Faisalabad (HQ)'
  const scaleStr = data.guestScale || 'Standard'
  const mascots = data.mascotCount || 1
  const vids = data.videographers || 0
  const photos = data.photographers || 0
  const drone = data.hasDrone ? 'YES (Aerial Shots)' : 'NO'
  const album = data.hasAlbum ? 'YES (Hardbook Album)' : 'NO'
  const price = data.totalPrice ? `PKR ${data.totalPrice.toLocaleString()}` : 'Custom Quote'

  const message = `Assalam-o-Alaikum The PK Events team! Main ${cityStr} se bol raha hoon. Mujhe apne event ke liye custom package ki date availability confirm karni hai:

📅 Event Date: ${dateStr}
📍 Location: ${cityStr}
👥 Guest Scale: ${scaleStr}
🦍 Mascots Fleet: ${mascots} Gorilla(s)
🎥 Media Crew: ${vids} Videographer(s), ${photos} Photographer(s), Drone: ${drone}
🎁 Included Freebies: Full Event Edited Film (FREE Gift), High-Res Raw Data Backup
📖 Optional Add-on: ${album}

💰 Calculated Total: ${price}

Kia is date par aap ki team available hai? Advance booking terms share kar dein!`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
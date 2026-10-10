import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../data'

const message = encodeURIComponent(
  'Olá, Pedro! Vi seu portfólio e quero conversar sobre um projeto.'
)

export default function WhatsAppButton() {
  return (
    <a
      href={`${whatsappLink}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

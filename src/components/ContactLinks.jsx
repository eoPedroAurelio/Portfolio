import { contactLinks } from '../data'

export default function ContactLinks() {
  return (
    <div className="contact-links">
      {contactLinks.map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer">
          {label}
        </a>
      ))}
    </div>
  )
}

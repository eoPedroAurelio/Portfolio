import { partners } from '../data'

export default function Partners() {
  if (partners.length === 0) return null

  return (
    <section className="partners section">
      <div className="section-header fade-in">
        <p className="section-label">PARCEIROS</p>

        <h2>
          Lojas que confiam
          <br />
          no meu trabalho.
        </h2>
      </div>

      <div className="partners-grid">
        {partners.map(({ name, logo, href }) => {
          const content = logo ? <img src={logo} alt={name} /> : <span>{name}</span>

          return href ? (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="partner fade-in">
              {content}
            </a>
          ) : (
            <div key={name} className="partner fade-in">
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
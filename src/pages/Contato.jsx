import ContactLinks from '../components/ContactLinks'

export default function Contato() {
  return (
    <section className="contact-page">
      <div className="contact-content">
        <p className="section-label">CONTATO</p>

        <h1>
          Vamos criar
          <br />
          algo juntos?
        </h1>

        <p className="contact-description">
          Tem uma ideia, projeto ou produção audiovisual? Entre em contato comigo.
        </p>

        <ContactLinks />
      </div>
    </section>
  )
}

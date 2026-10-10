import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import ContactModal from '../components/ContactModal'
import Showreel from '../components/Showreel'
import Testimonials from '../components/Testimonials'
import { services } from '../data'
import Partners from '../components/Partners'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="hero">
        <div className="hero-content fade-in">
          <p className="hero-label">AUDIOVISUAL • CRIAÇÃO • EDIÇÃO</p>

          <h1>
            Criando com propósito
            <br />
            em cada<span> frame.</span>
          </h1>

          <p className="hero-description">
            Produção audiovisual, edição de vídeo e criação de conteúdo para
            empresas nas redes sociais.
          </p>

          <div className="hero-buttons">
            <Button as="a" href="#showreel" variant="outline-light" className="button">
              Conheça meu trabalho
              <span>↓</span>
            </Button>

            <Button variant="outline-light" className="button" onClick={() => setShowModal(true)}>
              Fale comigo
            </Button>
          </div>
        </div>
      </section>

      <Showreel />

      <section id="sobre" className="about section">
        <div className="about-image fade-in">
          <img src="/imgs/eu.jpeg" alt="Foto de Pedro Aurélio" />
        </div>

        <div className="about-content fade-in">
          <p className="section-label">SOBRE MIM</p>

          <h2>
            Minha trajetória
            <br />
            no audiovisual.
          </h2>

          <p>
            Minha trajetória no audiovisual começou com a vontade de
            transformar ideias e momentos em histórias através de imagens.
          </p>

          <p>
            Desde então, venho desenvolvendo experiências com gravação, edição
            e criação de conteúdo, buscando unir criatividade e técnica em cada
            projeto para criar com <span>propósito.</span>
          </p>
        </div>
      </section>

      <section className="services section">
        <div className="section-header fade-in">
          <p className="section-label">O QUE EU FAÇO</p>

          <h2>
            Do primeiro frame
            <br />
            ao resultado final.
          </h2>
        </div>

        <div className="services-container">
          {services.map(({ title, text }) => (
            <Card as="article" className="service-card fade-in" key={title}>
              <Card.Body>
                <Card.Title as="h3">{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      <Partners />
      <Testimonials />

      <ContactModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  )
}
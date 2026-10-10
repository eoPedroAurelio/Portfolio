import { Card } from 'react-bootstrap'
import { testimonials } from '../data'

export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section className="testimonials section">
      <div className="section-header fade-in">
        <p className="section-label">DEPOIMENTOS</p>

        <h2>
          Quem já
          <br />
          trabalhou comigo.
        </h2>
      </div>

      <div className="services-container">
        {testimonials.map(({ name, role, text }) => (
          <Card as="article" className="service-card fade-in" key={name}>
            <Card.Body>
              <Card.Text>“{text}”</Card.Text>
              <p className="testimonial-author">
                {name}
                <span>{role}</span>
              </p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  )
}

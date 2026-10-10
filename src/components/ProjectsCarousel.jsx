import { Carousel } from 'react-bootstrap'
import { projects } from '../data'

export default function ProjectsCarousel() {
  return (
    <Carousel className="custom-carousel">
      {projects.map(({ id, title, href, cover }) => (
        <Carousel.Item key={id}>
          <div
            className="carousel-slide-content"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.45), rgba(10, 10, 10, 0.85)), url(${cover})`,
            }}
          >
            <p className="section-label">PROJETO {id}</p>
            <h3>{title}</h3>
            <a href={href} target="_blank" rel="noreferrer" className="button">
              Ver no Instagram
            </a>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
import { Carousel } from 'react-bootstrap'
import { projects } from '../data'

export default function ProjectsCarousel() {
  return (
    <Carousel className="custom-carousel">
      {projects.map(({ id, href }) => (
        <Carousel.Item key={id}>
          <div className="carousel-slide-content">
            <p className="section-label">PROJETO {id}</p>
            <h3>Projeto {id}</h3>
            <a href={href} target="_blank" rel="noreferrer" className="button">
              Ver no Instagram
            </a>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

import ProjectsCarousel from '../components/ProjectsCarousel'

export default function Trabalhos() {
  return (
    <section className="works-page">
      <div className="works-content">
        <p className="section-label">PORTFÓLIO</p>

        <h1>
          Trabalhos
          <br />
          realizados.
        </h1>

        <p className="works-description">
          Confira alguns dos projetos audiovisuais que já produzi e editei.
        </p>

        <ProjectsCarousel />
      </div>
    </section>
  )
}

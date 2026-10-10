export default function Showreel() {
  return (
    <section id="showreel" className="showreel section">
      <div className="section-header fade-in">
        <p className="section-label">SHOWREEL</p>

        <h2>
          Meu trabalho
          <br />
          em movimento.
        </h2>
      </div>

      <div className="showreel-video fade-in">
        <video controls playsInline preload="metadata">
          <source src="/videos/showreel.mp4#t=0.1" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>
    </section>
  )
}

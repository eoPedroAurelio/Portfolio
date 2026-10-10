import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Trabalhos from './pages/Trabalhos'
import Contato from './pages/Contato'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const { pathname } = useLocation()

  // volta pro topo ao trocar de página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // fade-in ao rolar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <AppNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
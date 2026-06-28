import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import gato1 from '../assets/gato1.jpg'
import gato2 from '../assets/gato2.jpg'
import gato3 from '../assets/gato3.jpg'

function Home() {

  const navigate = useNavigate()

  const imagens = [gato1, gato2, gato3]

  const [imagemAtual, setImagemAtual] = useState(0)

  useEffect(() => {

    const intervalo = setInterval(() => {

      setImagemAtual((prev) => (prev + 1) % imagens.length)

    }, 3000)

    return () => clearInterval(intervalo)

  }, [])

  return (

    <section className="hero-section">

      <div className="hero-carousel">

        <img
          src={imagens[imagemAtual]}
          alt="Gatos resgatados"
          className="carousel-image"
        />

      </div>

      <h2>
        Proteção e cuidado para gatos resgatados
      </h2>

      <p>
        A RonronCare atua no resgate, acolhimento e recuperação de gatos em
        situação de vulnerabilidade, oferecendo alimentação, acompanhamento
        veterinário e um ambiente seguro para cada animal.
      </p>

      <button
        className="hero-button"
        onClick={() => navigate('/gatos')}
      >
        Conhecer nossos gatos
      </button>

      <div className="stats-section">

        <div className="stat-card">
          <h3>25+</h3>
          <span>Resgates</span>
        </div>

        <div className="stat-card">
          <h3>40+</h3>
          <span>Atendimentos</span>
        </div>

        <div className="stat-card">
          <h3>12+</h3>
          <span>Voluntários</span>
        </div>

        <div className="stat-card">
          <h3>100%</h3>
          <span>Comprometimento</span>
        </div>

      </div>

      <div className="info-section">

        <h2>Quem Somos</h2>

        <p>
          A RonronCare é uma organização dedicada à proteção e ao bem-estar felino.
          Nosso trabalho envolve resgate, alimentação, acompanhamento veterinário
          e cuidados diários para garantir uma vida mais saudável e segura aos gatos acolhidos.
        </p>

      </div>

    </section>

  )
}

export default Home
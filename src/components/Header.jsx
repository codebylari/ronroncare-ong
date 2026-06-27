import { Link } from 'react-router-dom'

function Header() {

  return (

    <header className="header">

      <div className="logo-area">

        <div className="logo-circle">
          🐾
        </div>

        <div>

          <h1>
            RonronCare
          </h1>

          <span>
            ONG FELINA
          </span>

        </div>

      </div>

      <nav>

        <Link to="/">
          Início
        </Link>

        <Link to="/gatos">
          Gatos
        </Link>

        <Link to="/sobre">
          Sobre
        </Link>

        <Link to="/doacoes">
          Doações
        </Link>

        <Link to="/contato">
          Contato
        </Link>

      </nav>

    </header>

  )
}

export default Header
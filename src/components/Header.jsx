import { NavLink } from 'react-router-dom'

function Header() {

  return (

    <header className="header">

      <div className="logo-area">

        <div className="logo-circle">
          🐾
        </div>

        <div>

          <h1>RonronCare</h1>

          <span>ONG FELINA</span>

        </div>

      </div>

      <nav>

        <NavLink to="/">
          Início
        </NavLink>

        <NavLink to="/gatos">
          Nossos Gatos
        </NavLink>

        <NavLink to="/sobre">
          Sobre
        </NavLink>

        <NavLink to="/contato">
          Contato
        </NavLink>

        <NavLink to="/doacoes">
          Apoiar
        </NavLink>

      </nav>

    </header>

  )
}

export default Header
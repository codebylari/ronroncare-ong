import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Cats from './pages/Cats'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/gatos"
          element={<Cats />}
        />

        <Route
          path="/sobre"
          element={<About />}
        />

        <Route
          path="/contato"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  )
}

export default App
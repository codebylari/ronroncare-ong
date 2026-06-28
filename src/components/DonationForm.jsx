import { useState } from 'react'

function DonationForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [value, setValue] = useState('')

  function handleSubmit(event) {

    event.preventDefault()

    if (!name || !email || !value) {
      alert('Preencha todos os campos!')
      return
    }

    alert(
      `Obrigado pela sua contribuição, ${name}! 🐾`
    )

    setName('')
    setEmail('')
    setValue('')
  }

  return (

    <form onSubmit={handleSubmit} className="donation-form">

      <h2>Faça sua doação</h2>

      <p>
        Preencha os dados abaixo para simular uma doação e apoiar
        nossos projetos de resgate e cuidados veterinários.
      </p>

      <input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor da contribuição (R$)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">
        Apoiar a RonronCare 🐾
      </button>

    </form>

  )
}

export default DonationForm
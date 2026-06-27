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

alert(`Obrigado pela sua doação, ${name}! ❤️`)

setName('')
setEmail('')
setValue('')


}

return (

<form onSubmit={handleSubmit} className="donation-form">

  <input
    type="text"
    placeholder="Seu nome"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    type="email"
    placeholder="Seu e-mail"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="number"
    placeholder="Valor da doação (R$)"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />

  <button type="submit">
    Fazer Doação ❤️
  </button>

</form>

)
}

export default DonationForm

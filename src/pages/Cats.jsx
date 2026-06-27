import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import FilterPanel from '../components/FilterPanel'
import CatCard from '../components/CatCard'

import cats from '../data/cats'

function Cats() {

const [search, setSearch] = useState('')
const [filter, setFilter] = useState('todos')

const filteredCats = cats.filter((cat) => {


const matchSearch =
  cat.name.toLowerCase().includes(search.toLowerCase())

if (filter === 'todos') {
  return matchSearch
}

if (filter === 'adulto') {
  return matchSearch && parseInt(cat.age) >= 2
}

if (filter === 'jovem') {
  return matchSearch && parseInt(cat.age) < 2
}

return matchSearch


})

return (


<section className="info-section">

  <h2>
    Nossos Resgatados
  </h2>

  <p>
    Conheça alguns dos gatos acolhidos pela RonronCare e acompanhe suas histórias de superação.
  </p>

  <SearchBar
    search={search}
    setSearch={setSearch}
  />

  <FilterPanel
    filter={filter}
    setFilter={setFilter}
  />

  <div className="cats-container">

    {filteredCats.map((cat) => (

      <CatCard
        key={cat.id}
        cat={cat}
      />

    ))}

  </div>

</section>


)
}

export default Cats

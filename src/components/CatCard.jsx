function CatCard({ cat }) {

return (


<div className="cat-card">

  <img
    src={cat.image}
    alt={cat.name}
  />

  <div className="cat-card-content">

    <h2>{cat.name}</h2>

    <p>
      <strong>Idade:</strong> {cat.age}
    </p>

    <p>
      <strong>Sexo:</strong> {cat.gender}
    </p>

    <p>
      <strong>Personalidade:</strong> {cat.personality}
    </p>

    <p>
      {cat.story}
    </p>

  </div>

</div>


)
}

export default CatCard

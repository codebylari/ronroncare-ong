function CatCard({ cat }) {
  return (
    <div className="cat-card">

      <img src={cat.image} alt={cat.name} />

      <div className="cat-card-content">

        <h2>{cat.name}</h2>

        <p><strong>Idade:</strong> {cat.age}</p>

        <p><strong>Sexo:</strong> {cat.gender}</p>

        <p>{cat.personality}</p>

        <span>{cat.status}</span>

      </div>

    </div>
  )
}

export default CatCard
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Buscar gato pelo nome..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

    </div>
  )
}

export default SearchBar
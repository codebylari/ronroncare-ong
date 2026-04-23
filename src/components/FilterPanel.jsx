function FilterPanel({ filter, setFilter }) {
  return (
    <div className="filter-panel">

      <select
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >

        <option value="todos">
          Todos
        </option>

        <option value="adulto">
          Adultos
        </option>

        <option value="jovem">
          Jovens
        </option>

      </select>

    </div>
  )
}

export default FilterPanel
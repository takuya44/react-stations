// @ts-check

export const BreedsSelect = ({
  breeds,
  selectedBreed,
  setSelectedBreed,
  images,
  fetchImages,
}) => {
  return (
    <>
      <div className="dog-list-controls">
        <label htmlFor="breed-select">Breeds List</label>
        <select
          id="breed-select"
          value={selectedBreed}
          onChange={e => setSelectedBreed(e.target.value)}
        >
          {breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>
        <button onClick={fetchImages}>表示</button>
        <div className="dog-list">
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Dog ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BreedsSelect

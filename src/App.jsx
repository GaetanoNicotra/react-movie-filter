import { useState, useEffect } from 'react'

function App() {
  const moviesArray = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState(moviesArray)
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [selectedGenre, setSelectedGenre] = useState("")

  // useEffect(() => {
  //   const filteredArray = movies.filter((movie) => {
  //     return movie.genre.toLowerCase().includes(search.toLocaleLowerCase());
  //   });
  //   setFilteredMovies(filteredArray)
  // }, [movies, search])

  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) => {
      return selectedGenre === movie.genre
    })
    setFilteredMovies(newFilteredMovies)
  }, [selectedGenre]);

  return (
    <>
      <div className="container mt-5">
        <select className="form-select mb-4 f-size" aria-label="Default select example" onChange={(e) => { setSelectedGenre(e.target.value) }} >
          <option selected>Seleziona il genere che preferisci</option>
          {movies.map(movie => (
            <option value={movie.genre} >{movie.genre}</option>
          ))}
        </select>
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">React Movie Filter</li>
          {filteredMovies.map(movie => (
            <li className="list-group-item" key={movie.genre}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

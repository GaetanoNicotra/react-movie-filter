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

  //const [search, setSearch] = useState("")
  const [movies, setMovies] = useState(moviesArray)
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [selectedGenre, setSelectedGenre] = useState("")
  const [newFilm, setNewFilm] = useState("")
  const [newFilmGenre, setNewFilmGenre] = useState("")

  // useEffect(() => {
  //   const filteredArray = movies.filter((movie) => {
  //     return movie.genre.toLowerCase().includes(search.toLocaleLowerCase());
  //   });
  //   setFilteredMovies(filteredArray)
  // }, [movies, search])

  useEffect(() => {
    if (selectedGenre === 'Seleziona il genere che preferisci') {
      setFilteredMovies(movies)
    }
    else {
      const newFilteredMovies = movies.filter((movie) => {
        return selectedGenre === movie.genre
      })
      setFilteredMovies(newFilteredMovies)
    }
  }, [selectedGenre, movies]);

  const addFilm = (e) => {
    e.preventDefault();
    const newFilmObject = { title: newFilm, genre: newFilmGenre }
    setMovies([...movies, newFilmObject])
    setNewFilm("")
    setNewFilmGenre("")
  }

  return (
    <>
      <div className="container mt-5">
        <select className="form-select mb-4 f-size" aria-label="Default select example" onChange={(e) => { setSelectedGenre(e.target.value) }} >
          <option>Seleziona il genere che preferisci</option>
          {movies.map(movie => (
            <option key={movie.title} value={movie.genre} >{movie.genre}</option>
          ))}
        </select>
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">React Movie Filter</li>
          {filteredMovies.map(movie => (
            <li className="list-group-item" key={movie.title}>{movie.title}</li>
          ))}
        </ul>
        <form onSubmit={addFilm}>
          <div className="input-group mt-3">
            <input value={newFilm} onChange={(e) => {
              setNewFilm(e.target.value)
            }} type="text" className='px-4' placeholder='Inserisci un nuovo film' />
            <button className='btn btn-primary ms-3'> Aggiungi</button>

            <input value={newFilmGenre} onChange={(e) => {
              setNewFilmGenre(e.target.value)
            }} type="text" className='px-4' placeholder='Inserisci il genere' />
            <button className='btn btn-primary ms-3'> Aggiungi</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App

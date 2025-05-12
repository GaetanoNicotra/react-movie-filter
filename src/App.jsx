import { useState } from 'react'

function App() {
  const moviesArray = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  return (
    <>
      <div className="container mt-5">
        <select className="form-select mb-4 f-size" aria-label="Default select example">
          <option selected>Seleziona il genere che preferisci</option>
          {moviesArray.map(movie => (
            <option value="1">{movie.genre}</option>
          ))}

        </select>
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">React Movie Filter</li>
          {moviesArray.map(movie => (
            <li className="list-group-item" key={movie.genre}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

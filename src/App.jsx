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
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">React Movie Filter</li>
          {moviesArray.map(movie => (
            <li class="list-group-item" key={movie.genre}>{movie.title}</li>
          ))}

        </ul>
      </div>
    </>
  )
}

export default App

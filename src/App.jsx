import { useState } from 'react'


function App() {
  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  return (
    <>
      <div className="container">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">React Movie Filter</li>
          <li class="list-group-item">A second item</li>
        </ul>
      </div>
    </>
  )
}

export default App

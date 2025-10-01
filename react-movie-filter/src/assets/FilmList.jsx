import { useState, useEffect } from 'react'

function FilmList() { 
  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  const [searchGenre, setSearchGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    const filtered = movies.filter(movie =>
      movie.genre.toLowerCase().includes(searchGenre.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchGenre]);

  return (
    <div className="film-container">
      <input
        type="text"
        placeholder="Cerca per genere"
        value={searchGenre}
        onChange={(e) => setSearchGenre(e.target.value)}
      />

      <ul>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, i) => (
            <li key={i}>
              {movie.title} ({movie.genre})
            </li>
          ))
        ) : (
          <li>Nessun film trovato</li>
        )}
      </ul>
    </div>
  );
}

export default FilmList;


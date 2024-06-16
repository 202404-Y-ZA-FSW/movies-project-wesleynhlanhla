import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/MovieService';


const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const latestMovies = await fetchMovies('latest');
      setMovies(latestMovies);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

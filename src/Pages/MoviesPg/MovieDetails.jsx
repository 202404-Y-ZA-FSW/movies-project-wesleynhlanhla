import { useState, useEffect } from 'react';
import { apiKey } from '../../Util/API';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
    const { genreId } = useParams();
    const [movies, setMovies] = useState([]);

    const fetchMoviesByGenre = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
            const data = await response.json();
            if (response.ok) {
                setMovies(data.results);
            } else {
                console.error("Error fetching movies by genre:", data.status_message);
            }
        } catch (error) {
            console.error("Error fetching movies by genre:", error);
        }
    };

    useEffect(() => {
        if (genreId) {
            fetchMoviesByGenre();
        }
    }, [genreId]);

    const renderMovies = () => {
        return movies.map((movie) => (
            <li key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </li>
        ));
    };

    return (
        <div>
            <h1>Movies by Genre</h1>
            <ul>
                {renderMovies()}
            </ul>
        </div>
    );
};

export default MoviesDetails;




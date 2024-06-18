import { useState, useEffect } from 'react';
import { apiKey } from '../Util/API';

const Movie = () => {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
            const data = await response.json();
            setMovies(data.results);
            console.log(data.results); // Logging the fetched data
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Movie;

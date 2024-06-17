import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Chip, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../utils/api';

const MovieDetailPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            const response = await fetchMovieDetails(movieId);a
            setMovie(response.data);
        };
        getMovieDetails();
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3">{movie.title}</Typography>
                    <Typography variant="h6">Release Date: {movie.release_date}</Typography>
                    <Typography variant="h6">Runtime: {movie.runtime} mins</Typography>
                    <Typography variant="h6">Language: {movie.original_language.toUpperCase()}</Typography>
                    <Typography variant="h6">Rating: {movie.vote_average} ({movie.vote_count} votes)</Typography>
                    <Typography variant="h6">Director: {movie.credits.crew.find(member => member.job === 'Director').name}</Typography>
                    <Typography variant="body1">{movie.overview}</Typography>
                    <Box mt={2}>
                        <Typography variant="h5">Main Cast</Typography>
                        <Grid container spacing={1}>
                            {movie.credits.cast.slice(0, 5).map((actor) => (
                                <Chip key={actor.cast_id} label={actor.name} onClick={() => window.location.href = `/actor/${actor.id}`} />
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Box mt={4}>
                <Typography variant="h5">Related Movies</Typography>
                <Grid container spacing={4}>
                    {movie.similar.results.slice(0, 5).map((relatedMovie) => (
                        <Grid item key={relatedMovie.id} xs={12} sm={6} md={4} lg={3}>
                            <Card onClick={() => window.location.href = `/movie/${relatedMovie.id}`}>
                                <CardMedia
                                    component="img"
                                    image={`https://image.tmdb.org/t/p/w500${relatedMovie.poster_path}`}
                                    alt={relatedMovie.title}
                                />
                                <CardContent>
                                    <Typography variant="h6">{relatedMovie.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box mt={4}>
                <Typography variant="h5">Trailer</Typography>
                {movie.videos.results.length > 0 && (
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                    />
                )}
            </Box>
        </Container>
    );
};

export default MovieDetailPage;

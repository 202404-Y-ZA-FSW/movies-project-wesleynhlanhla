// // src/pages/MoviesPage.jsx
// import React, { useState, useEffect } from 'react';
// import { fetchMovies } from '../services/MovieService';
// import MovieCard from '../components/MovieCard';
// import { useParams } from 'react-router-dom';

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const { category } = useParams();

//   useEffect(() => {
//     const getMovies = async () => {
//       const movies = await fetchMovies(category);
//       setMovies(movies);
//     };
//     getMovies();
//   }, [category]);

//   return (
//     <div>
//       <h1>{category.replace('-', ' ').toUpperCase()}</h1>
//       <div className="movie-list">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoviesPage;

// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography } from '@mui/material';
// import { fetchMovies } from '../utils/api';
// import MovieCard from '../components/MovieCard';
// import { useParams } from 'react-router-dom';

// const MoviesPage = () => {
//     const { type } = useParams();
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const getMovies = async () => {
//             const response = await fetchMovies(type);
//             setMovies(response.data.results);
//         };
//         getMovies();
//     }, [type]);

//     return (
//         <Container>
//             <Typography variant="h4" gutterBottom>{type.replace('_', ' ').toUpperCase()}</Typography>
//             <Grid container spacing={4}>
//                 {movies.map((movie) => (
//                     <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
//                         <MovieCard movie={movie} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     );
// };

// export default MoviesPage;


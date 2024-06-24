// // import React, { useState, useEffect } from 'react';
// // import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
// // import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { apiKey } from '../Util/API';
// // import './Header.css'; 

// // const Navbar = () => {
// //   const [genres, setGenres] = useState([]);
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchGenres = async () => {
// //       try {
// //         const response = await axios.get(https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey});
// //         setGenres(response.data.genres);
// //       } catch (error) {
// //         console.error("Error fetching genres:", error);
// //       }
// //     };
// //     fetchGenres();
// //   }, []);

// //   const handleMenuOpen = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const handleMoviesMenuOpen = (event) => {
// //     setMoviesAnchorEl(event.currentTarget);
// //   };

// //   const handleMoviesMenuClose = () => {
// //     setMoviesAnchorEl(null);
// //   };

// //   const handleCategoryClick = (category) => {
// //     navigate(/movies?category=${category});
// //     setMoviesAnchorEl(null);
// //   };

// //   return (
// //     <AppBar position="static" sx={{ backgroundColor: 'black' }}>
// //       <Toolbar>
// //         <Typography variant="h6" style={{ flexGrow: 1 }}>
// //           <Link to="/" className="cine-stream-link">
// //             <span className='neon'>Cine</span><span className='flux'>Stream</span>
// //           </Link>
// //         </Typography>
// //         <Button onClick={handleMoviesMenuOpen}>
// //           <span className='act'>Movies</span>
// //         </Button>
// //         <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
// //           <MenuItem onClick={() => handleCategoryClick('popular')}>
// //             <span>Popular</span>
// //           </MenuItem>
// //           <MenuItem onClick={() => handleCategoryClick('top_rated')}>
// //             <span>Top Rated</span>
// //           </MenuItem>
// //           <MenuItem onClick={() => handleCategoryClick('now_playing')}>
// //             <span>Now Playing</span>
// //           </MenuItem>
// //           <MenuItem onClick={() => handleCategoryClick('upcoming')}>
// //             <span>Upcoming</span>
// //           </MenuItem>
// //           <MenuItem onClick={() => handleCategoryClick('latest')}>
// //             <span>Latest</span>
// //           </MenuItem>
// //         </Menu>
// //         <Button color="inherit" onClick={handleMenuOpen}>
// //           <span className='act'>Genres</span> 
// //         </Button>
// //         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
// //           {genres.map((genre) => (
// //             <MenuItem key={genre.id} onClick={handleMenuClose}>
// //               <Link to={/genre/${genre.id}} style={{ color: 'inherit', textDecoration: 'none' }}>{genre.name}</Link>
// //             </MenuItem>
// //           ))}
// //         </Menu>
// //         <Button color="inherit">
// //           <Link to="/actors" className='act'><span>Actors</span></Link>
// //         </Button>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { apiKey } from '../Util/API';
// import './Header.css'; 

// const Navbar = () => {
//   const [genres, setGenres] = useState([]);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
//         setGenres(response.data.genres);
//       } catch (error) {
//         console.error("Error fetching genres:", error);
//       }
//     };
//     fetchGenres();
//   }, []);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMoviesMenuOpen = (event) => {
//     setMoviesAnchorEl(event.currentTarget);
//   };

//   const handleMoviesMenuClose = () => {
//     setMoviesAnchorEl(null);
//   };

//   const handleCategoryClick = (category) => {
//     navigate(`/movies?category=${category}`);
//     setMoviesAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'black' }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           <Link to="/" className="cine-stream-link">
//             <span className='neon'>Cine</span><span className='flux'>Stream</span>
//           </Link>
//         </Typography>
//         <Button onClick={handleMoviesMenuOpen}>
//           <span className='act'>Movies</span>
//         </Button>
//         <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
//           <MenuItem onClick={() => handleCategoryClick('popular')}>
//             <span>Popular</span>
//           </MenuItem>
//           <MenuItem onClick={() => handleCategoryClick('top_rated')}>
//             <span>Top Rated</span>
//           </MenuItem>
//           <MenuItem onClick={() => handleCategoryClick('now_playing')}>
//             <span>Now Playing</span>
//           </MenuItem>
//           <MenuItem onClick={() => handleCategoryClick('upcoming')}>
//             <span>Upcoming</span>
//           </MenuItem>
//           <MenuItem onClick={() => handleCategoryClick('latest')}>
//             <span>Latest</span>
//           </MenuItem>
//         </Menu>
//         <Button color="inherit" onClick={handleMenuOpen}>
//           <span className='act'>Genres</span> 
//         </Button>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//           {genres.map((genre) => (
//             <MenuItem key={genre.id} onClick={handleMenuClose}>
//               <Link to={`/genre/${genre.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{genre.name}</Link>
//             </MenuItem>
//           ))}
//         </Menu>
//         <Button color="inherit">
//           <Link to="/actors" className='act'><span>Actors</span></Link>
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// SECOND CODE

// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { apiKey } from '../Util/API';
// import Searchbar from './SearchbarPg/SearchBar';


// const Navbar = () => {
//   const [genres, setGenres] = useState([]);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
//         setGenres(response.data.genres);
//       } catch (error) {
//         console.error("Error fetching genres:", error);
//       }
//     };
//     fetchGenres();
//   }, []);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMoviesMenuOpen = (event) => {
//     setMoviesAnchorEl(event.currentTarget);
//   };

//   const handleMoviesMenuClose = () => {
//     setMoviesAnchorEl(null);
//   };

//   const handleCategoryClick = (category) => {
//     navigate(`/movies?category=${category}`);
//     setMoviesAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'black' }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           <Link to="/" className="cine-stream-link">
//             <span className='neon'>Cine</span><span className='flux'>Stream</span>
//           </Link>
//         </Typography>
//         <Button onClick={handleMoviesMenuOpen}>
//           <span className='act'>Movies</span>
//         </Button>
//         <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
//           <MenuItem onClick={() => handleCategoryClick('popular')}>
//             <span>Popular</span>
//           </MenuItem>
//           <MenuItem onClick={() => handleCategoryClick('top_rated')}>
//             <span>Top Rated</span>
//           </MenuItem>
//           <MenuItem onClick={() => handleCategoryClick('now_playing')}>
//             <span>Now Playing</span>
//           </MenuItem>
//           <MenuItem onClick={() => handleCategoryClick('upcoming')}>
//             <span>Upcoming</span>
//           </MenuItem>
//           <MenuItem onClick={() => handleCategoryClick('latest')}>
//             <span>Latest</span>
//           </MenuItem>
//         </Menu>
//         <Button color="inherit" onClick={handleMenuOpen}>
//           <span className='act'>Genres</span>
//         </Button>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//           {genres.map((genre) => (
//             <MenuItem key={genre.id} onClick={handleMenuClose}>
//               <Link to={`/genre/${genre.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{genre.name}</Link>
//             </MenuItem>
//           ))}
//         </Menu>
//         <Button color="inherit">
//           <Link to="/actors" className='act'><span>Actors</span></Link>
//         </Button>
//         <Searchbar /> {/* Add the SearchBar component here */}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiKey } from '../Util/API';
import SearchBar from '../SearchBarPg/SearchBar'; 

const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMoviesMenuOpen = (event) => {
    setMoviesAnchorEl(event.currentTarget);
  };

  const handleMoviesMenuClose = () => {
    setMoviesAnchorEl(null);
  };

  const handleCategoryClick = (category) => {
    navigate(`/movies?category=${category}`);
    setMoviesAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" className="cine-stream-link">
            <span className='neon'>Cine</span><span className='flux'>Stream</span>
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={handleMoviesMenuOpen} sx={{ color: 'white' }}>
            <span className='act'>Movies</span>
          </Button>
          <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
            <MenuItem onClick={() => handleCategoryClick('popular')}>
              <span>Popular</span>
            </MenuItem>
            <MenuItem onClick={() => handleCategoryClick('top_rated')}>
              <span>Top Rated</span>
            </MenuItem>
            <MenuItem onClick={() => handleCategoryClick('now_playing')}>
              <span>Now Playing</span>
            </MenuItem>
            <MenuItem onClick={() => handleCategoryClick('upcoming')}>
              <span>Upcoming</span>
            </MenuItem>
            <MenuItem onClick={() => handleCategoryClick('latest')}>
              <span>Latest</span>
            </MenuItem>
          </Menu>
          <Button color="inherit" onClick={handleMenuOpen} sx={{ color: 'white' }}>
            <span className='act'>Genres</span>
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {genres.map((genre) => (
              <MenuItem key={genre.id} onClick={handleMenuClose}>
                <Link to={`/genre/${genre.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{genre.name}</Link>
              </MenuItem>
            ))}
          </Menu>
          <Button color="inherit" sx={{ color: 'white' }}>
            <Link to="/actors" className='act'><span>Actors</span></Link>
          </Button>
          <Box sx={{ ml: 2 }}>
          <SearchBar />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

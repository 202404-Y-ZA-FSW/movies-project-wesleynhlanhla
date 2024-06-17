import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import { apiKey } from '../Util/API';

const Navbar = () => {
    const [genres, setGenres] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            const response = await axios.get(`${apiKey}`);
            setGenres(response.data.genres);
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

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            // navigate(`/search/${event.target.value}`);
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    MovieWebsite
                </Typography>
                <Button color="inherit" onClick={handleMenuOpen}>
                    Genres
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    {genres.map((genre) => (
                        <MenuItem key={genre.id}>{genre.name}</MenuItem>
                    ))}
                </Menu>
                <Button color="inherit" onClick={handleMoviesMenuOpen}>
                    Movies
                </Button>
                <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
                    <MenuItem onClick={handleMoviesMenuClose}>Top Rated</MenuItem>
                    <MenuItem onClick={handleMoviesMenuClose}>Popular</MenuItem>
                    <MenuItem onClick={handleMoviesMenuClose}>Latest</MenuItem>
                    <MenuItem onClick={handleMoviesMenuClose}>Now Playing</MenuItem>
                    <MenuItem onClick={handleMoviesMenuClose}>Upcoming</MenuItem>
                </Menu>
                <Button color="inherit" onClick={() => {}}>About us</Button>
                <Button color="inherit" onClick={() => {}}>Contact us</Button>
                <Button color="inherit" onClick={() => {}}>Actors</Button>
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    onKeyDown={handleSearch}
                    style={{ backgroundColor: 'white', borderRadius: 4 }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import { apiKey } from '../utils/api';

const Navbar = () => {
    const [genres, setGenres] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGenres = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
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

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search/${event.target.value}`);
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
                        <MenuItem key={genre.id} onClick={() => navigate(`/genre/${genre.id}`)}>
                            {genre.name}
                        </MenuItem>
                    ))}
                </Menu>
                <Button color="inherit" onClick={() => navigate('/movies/top-rated')}>Top Rated</Button>
                <Button color="inherit" onClick={() => navigate('/movies/popular')}>Popular</Button>
                <Button color="inherit" onClick={() => navigate('/movies/latest')}>Latest</Button>
                <Button color="inherit" onClick={() => navigate('/movies/now-playing')}>Now Playing</Button>
                <Button color="inherit" onClick={() => navigate('/movies/upcoming')}>Upcoming</Button>
                <Button color="inherit" onClick={() => navigate('/actors')}>Actors</Button>
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    onKeyDown={handleSearch}
                    style={{ backgroundColor: 'blue', borderRadius: 4 }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;


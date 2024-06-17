import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import { apiKey } from '../Util/API';

const Navbar = () => {
    const [genres, setGenres] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    

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
                        <MenuItem key={genre.id} >
                            {genre.name}
                        </MenuItem>
                    ))}
                </Menu>
                <Button color="inherit" onClick={() => {}}>Top Rated</Button>
                <Button color="inherit" onClick={() => {}}>Popular</Button>
                <Button color="inherit" onClick={() => {}}>Latest</Button>
                <Button color="inherit" onClick={() => {}}>Now Playing</Button>
                <Button color="inherit" onClick={() => {}}>Upcoming</Button>
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


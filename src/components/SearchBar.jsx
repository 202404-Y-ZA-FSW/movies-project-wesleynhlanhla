import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/moviedetails/${query}`);
        }
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
                placeholder="Search..."
                style={styles.input}
            />
            <button onClick={() => navigate(`/moviedetails/${query}`)} style={styles.button}>
                Search
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
    },
    input: {
        flex: 1,
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginRight: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default SearchBar;
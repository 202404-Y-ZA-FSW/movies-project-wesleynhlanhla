
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#3f51b5', color: 'white', padding: '10px 0', marginTop: '20px' }}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    &copy; 2024 MovieWebsite. Created by Nhlanhla, Wesley. 
                    <a href="https://github.com/your-github" style={{ color: 'white', marginLeft: 10 }}>GitHub</a>
                    <a href="https://linkedin.com/in/your-linkedin" style={{ color: 'white', marginLeft: 10 }}>LinkedIn</a>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;


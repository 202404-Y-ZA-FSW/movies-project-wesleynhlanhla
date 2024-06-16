// // src/components/Footer/Footer.jsx
// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>Developed by [Your Name] and Team</p>
//       <p>
//         <a href="https://github.com/yourgithub">GitHub</a> | 
//         <a href="https://linkedin.com/in/yourlinkedin"> LinkedIn</a>
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#3f51b5', color: 'white', padding: '10px 0', marginTop: '20px' }}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    &copy; 2024 MovieWebsite. Created by [Your Name], [Teammate Name]. 
                    <a href="https://github.com/your-github" style={{ color: 'white', marginLeft: 10 }}>GitHub</a>
                    <a href="https://linkedin.com/in/your-linkedin" style={{ color: 'white', marginLeft: 10 }}>LinkedIn</a>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;


import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import logo from '../assets/logo.webp';

const Header = () => (
  <AppBar position="static" color="primary" sx={{ mb: 4 }}>
    <Toolbar sx={{ justifyContent: 'center', position: 'relative', flexDirection: 'column' }}>
      {/* Logo positioned at the extreme left */}
      <a href="/" style={{ textDecoration: 'none', position: 'absolute', left: 0 }}>
        <Box
          component="img"
          src={logo}
          alt="Virtual Doctor Logo"
          sx={{
            height: 40,
            ml: 2,
            borderRadius: '50%',  // Makes the image circular
            border: '2px solid white',  // Optional: Adds a white border
          }}
        />
      </a>

      {/* Centered Text */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: 'white',
          textAlign: 'center',
        }}
      >
        Virtual Doctor
      </Typography>

      {/* Slogan Below */}
      <Typography
        variant="body2"
        sx={{
          fontFamily: '"Urbanist", serif',
          fontStyle: 'italic',
          fontSize: '0.5rem',
          color: 'white',
          textAlign: 'center',
          mt: -0.5, // Adjusts spacing to bring it closer to "Virtual Dr."
        }}
      >
        Instant Care, Smart Prescriptions
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

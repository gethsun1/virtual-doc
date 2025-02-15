import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Box, Typography, Button, Modal, Paper 
} from '@mui/material';
import logo from '../assets/logo.webp';

const Header = () => {
  const [open, setOpen] = useState(false);

  // Function to handle modal toggle
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 4 }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
          {/* Logo positioned at the extreme left */}
          <a href="/" style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              src={logo}
              alt="Virtual Doctor Logo"
              sx={{
                height: 40,
                borderRadius: '50%',
                border: '2px solid white',
              }}
            />
          </a>

          {/* Centered Text */}
          <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Abril Fatface", serif',
                fontWeight: 'bold',
                fontSize: '1.6rem',
                color: 'white',
              }}
            >
              Virtual Doctor
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Urbanist", serif',
                fontStyle: 'italic',
                fontSize: '0.5rem',
                color: '#f1ffcb',
                mt: -0.8,
              }}
            >
              Instant Care, Smart Prescriptions
            </Typography>
          </Box>

          {/* Login & Register Buttons */}
          <Box>
            <Button 
              href="/login" 
              sx={{ 
                color: 'white', 
                fontWeight: 'bold', 
                textTransform: 'none', 
                mx: 1,
                '&:hover': { color: '#f8f8f8' }
              }}
            >
              Login
            </Button>

            <Button 
              onClick={handleOpen}
              sx={{ 
                color: 'white', 
                fontWeight: 'bold', 
                textTransform: 'none',
                border: '1px solid white',
                borderRadius: '20px',
                px: 2,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Register Modal */}
      <Modal open={open} onClose={handleClose}>
        <Paper 
          sx={{ 
            width: 300, 
            mx: 'auto', 
            mt: 20, 
            p: 3, 
            textAlign: 'center', 
            borderRadius: 2 
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Register As:
          </Typography>
          <Button 
            href="/register/patient" 
            fullWidth 
            sx={{ 
              backgroundColor: '#2a7a8d', 
              color: 'white', 
              my: 1, 
              '&:hover': { backgroundColor: '#1f5a6b' } 
            }}
          >
            Signup as a Patient
          </Button>
          <Button 
            href="/register/doctor" 
            fullWidth 
            sx={{ 
              backgroundColor: '#3ab4c9', 
              color: 'white', 
              my: 1, 
              '&:hover': { backgroundColor: '#2a8ea2' } 
            }}
          >
            Signup as a Doctor
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default Header;

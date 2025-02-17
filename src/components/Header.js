import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, Modal, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext'; 
import logo from '../assets/logo.webp';
import modalBg from '../assets/modal-bg.webp';

const Header = () => {
  const { user, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Function to handle modal toggle
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle input change
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(loginData.email, loginData.password);
    if (result.success) {
      handleClose(); // Close modal
      setError('');
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 4 }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="Virtual Doctor Logo" sx={{ height: 40, borderRadius: '50%', border: '2px solid white' }} />
          </a>

          <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.6rem', color: 'white' }}>
              Virtual Doctor
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: '0.5rem', color: '#f1ffcb', mt: -0.8 }}>
              Instant Care, Smart Prescriptions
            </Typography>
          </Box>

          <Box>
            {user ? (
              <>
                <Typography sx={{ color: 'white', fontWeight: 'bold', display: 'inline', mr: 2 }}>
                  {user.role === 'doctor' ? 'Dr.' : 'Patient'} {user.email}
                </Typography>
                <Button onClick={logout} sx={{ color: 'white', fontWeight: 'bold' }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button onClick={handleOpen} sx={{ color: 'white', fontWeight: 'bold', mx: 1 }}>
                  Login
                </Button>
                <Button onClick={handleOpen} sx={{ color: 'white', fontWeight: 'bold', border: '1px solid white', borderRadius: '20px', px: 2 }}>
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Login/Register Modal */}
      <Modal open={open} onClose={handleClose}>
        <Paper sx={{ width: 350, mx: 'auto', mt: 15, p: 4, textAlign: 'center', borderRadius: 3, backgroundImage: `url(${modalBg})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', position: 'relative', boxShadow: 5 }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 3 }} />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Login</Typography>
            <form onSubmit={handleLogin}>
              <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: 'none' }} />
              <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: 'none' }} />
              {error && <Typography sx={{ color: 'red', fontSize: '12px', mb: 1 }}>{error}</Typography>}
              <Button type="submit" fullWidth sx={{ backgroundColor: '#3ab4c9', color: 'white', '&:hover': { backgroundColor: '#2a8ea2' } }}>Login</Button>
            </form>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default Header;

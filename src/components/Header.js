import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, Modal, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp';
import modalBg from '../assets/modal-bg.webp';

const Header = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState('login'); // 'login' or 'register'
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Function to open modal with specified type
  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // Handle input change for login form
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(loginData.email, loginData.password);
    if (result.success) {
      handleClose();
      setError('');
    } else {
      setError(result.message);
    }
  };

  // Navigation for registration buttons
  const handleRegisterPatient = () => {
    handleClose();
    navigate('/register/patient');
  };
  const handleRegisterDoctor = () => {
    handleClose();
    navigate('/register/doctor');
  };

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
              sx={{ height: 40, borderRadius: '50%', border: '2px solid white' }}
            />
          </a>

          {/* Centered Text */}
          <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.6rem', color: 'white' }}>
              Virtual Doctor
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: '0.5rem', color: '#f1ffcb', mt: -0.8 }}>
              Instant Care, Smart Prescriptions
            </Typography>
          </Box>

          {/* Login & Register Buttons */}
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
                <Button
                  onClick={() => handleOpen('login')}
                  sx={{ color: 'white', fontWeight: 'bold', mx: 1 }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => handleOpen('register')}
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    border: '1px solid white',
                    borderRadius: '20px',
                    px: 2,
                  }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal for Login/Register */}
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            width: 350,
            mx: 'auto',
            mt: 15,
            p: 4,
            textAlign: 'center',
            borderRadius: 3,
            backgroundImage: `url(${modalBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            position: 'relative',
            boxShadow: 5,
          }}
        >
          {/* Overlay for readability */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 3,
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {modalType === 'login' ? (
              <>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Login
                </Typography>
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginBottom: '10px',
                      borderRadius: '5px',
                      border: 'none',
                    }}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginBottom: '10px',
                      borderRadius: '5px',
                      border: 'none',
                    }}
                  />
                  {error && (
                    <Typography sx={{ color: 'red', fontSize: '12px', mb: 1 }}>
                      {error}
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      backgroundColor: '#3ab4c9',
                      color: 'white',
                      '&:hover': { backgroundColor: '#2a8ea2' },
                    }}
                  >
                    Login
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Register As:
                </Typography>
                <Button
                  onClick={handleRegisterPatient}
                  fullWidth
                  sx={{
                    backgroundColor: '#2a7a8d',
                    color: 'white',
                    my: 1,
                    '&:hover': { backgroundColor: '#1f5a6b' },
                  }}
                >
                  Signup as a Patient
                </Button>
                <Button
                  onClick={handleRegisterDoctor}
                  fullWidth
                  sx={{
                    backgroundColor: '#3ab4c9',
                    color: 'white',
                    my: 1,
                    '&:hover': { backgroundColor: '#2a8ea2' },
                  }}
                >
                  Signup as a Doctor
                </Button>
              </>
            )}
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default Header;

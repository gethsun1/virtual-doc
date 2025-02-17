import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);

    if (result.success) {
      navigate('/'); // Redirect after successful login
    } else {
      setError(result.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" mb={2}>Login</Typography>
        
        {error && <Typography color="error">{error}</Typography>}
        
        <TextField label="Email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
        
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const RegisterPatient = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const result = register({ email, password, role: 'patient' });

    if (result.success) {
      setSuccess("Registration successful! You can now login.");
      setError('');
    } else {
      setError(result.message);
      setSuccess('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" mb={2}>Register as Patient</Typography>
        
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="success.main">{success}</Typography>}
        
        <TextField label="Email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
        
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterPatient;

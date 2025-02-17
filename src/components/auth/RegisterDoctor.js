import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Alert } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const RegisterDoctor = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!formData.name || !formData.email || !formData.password || !formData.specialization) {
      setError('All fields are required');
      setSuccess('');
      return;
    }

    // Attempt registration using the auth context's register function
    const result = register({ 
      name: formData.name,
      email: formData.email, 
      password: formData.password, 
      role: 'doctor', 
      specialization: formData.specialization 
    });
    
    if (result.success) {
      setSuccess('Registration successful! You can now login.');
      setError('');
      // Optionally, you might want to clear the form here:
      setFormData({ name: '', email: '', password: '', specialization: '' });
    } else {
      setError(result.message);
      setSuccess('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Register as a Doctor
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        <Box component="form" onSubmit={handleRegister} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            margin="normal"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Specialization"
            name="specialization"
            variant="outlined"
            margin="normal"
            required
            value={formData.specialization}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterDoctor;

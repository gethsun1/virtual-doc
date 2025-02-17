import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import DiagnosisChat from './components/DiagnosisChat';
import Login from './components/auth/Login';
import RegisterPatient from './components/auth/RegisterPatient';
import RegisterDoctor from './components/auth/RegisterDoctor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          {/* Flex container for full-height layout */}
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            {/* Main content area for routes */}
            <Box sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register/patient" element={<RegisterPatient />} />
                <Route path="/register/doctor" element={<RegisterDoctor />} />
              </Routes>
            </Box>

            <Footer />

            {/* Floating Diagnosis Chat widget for quick access */}
            <DiagnosisChat />
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

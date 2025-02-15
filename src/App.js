import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Alert,
  Box,
  Grow,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { getDiagnosis } from './api/openai';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Typewriter from './components/Typewriter';

const App = () => {
  const [symptom, setSymptom] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDiagnosis(null);
    setError('');

    try {
      const data = await getDiagnosis(symptom);
      setDiagnosis(data);
    } catch (err) {
      setError('Error fetching diagnosis. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Flex container for full-height layout */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        {/* Main content area that expands to fill available space */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Container maxWidth="sm">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" gutterBottom color="primary">
                  <Typewriter 
          text="Weelcome to the virtual doctor platform" 
          speed={75} 
          style={{ display: 'inline-block' }}
        />
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Describe your symptoms and get insights instantly.
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Describe your symptoms"
                variant="outlined"
                fullWidth
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                margin="normal"
                autoFocus
                helperText="Try to be as descriptive as possible"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Get Diagnosis'}
              </Button>
            </form>

            {diagnosis && (
              <Grow in={!!diagnosis}>
                <Card sx={{ mt: 3, boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" color="secondary">
                      Diagnosis:
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {diagnosis.error ? diagnosis.error : diagnosis}
                    </Typography>
                  </CardContent>
                </Card>
              </Grow>
            )}

            <Snackbar
              open={!!error}
              autoHideDuration={3000}
              onClose={() => setError('')}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert severity="error" variant="filled">
                {error}
              </Alert>
            </Snackbar>
          </Container>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;

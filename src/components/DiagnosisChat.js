import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

// Mock API function for demo purposes
const mockGetDiagnosis = async (symptom) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Possible condition: Mild flu or common cold based on symptoms: "${symptom}"`);
    }, 1500); // Simulating API delay
  });
};

const DiagnosisChat = () => {
  const [open, setOpen] = useState(false);
  const [symptom, setSymptom] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDiagnosis(null);

    try {
      const data = await mockGetDiagnosis(symptom);
      setDiagnosis(data);
    } catch (err) {
      setDiagnosis('Error fetching diagnosis. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
      {!open ? (
        <IconButton
          onClick={() => setOpen(true)}
          color="primary"
          sx={{ backgroundColor: 'white', boxShadow: 3 }}
        >
          <ChatIcon />
        </IconButton>
      ) : (
        <Paper sx={{ p: 2, width: 300, boxShadow: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Quick Diagnosis Chat</Typography>
            <IconButton size="small" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
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
            <Typography sx={{ mt: 2, color: 'text.secondary' }}>
              {diagnosis}
            </Typography>
          )}
        </Paper>
      )}
    </Box>
  );
};

export default DiagnosisChat;

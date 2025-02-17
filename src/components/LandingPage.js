import React from 'react';
import { 
  Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, CardActionArea, Divider 
} from '@mui/material';
import Typewriter from './Typewriter';

// Import local images for each section
// Doctors
import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';

// Pharmacies
import cityPharmacy from '../assets/citypharmacy.jpg';
import greeHealthPharmacy from '../assets/greehealthpharmacy.jpg';
import wellnessPharmacy from '../assets/wellnesspharmacy.jpg';

// Hospitals
import generalHospital from '../assets/generalhospital.jpg';
import downtownHospital from '../assets/downtown.jpg';
import sunriseHospital from '../assets/sunrise.jpg';

const doctors = [
  { name: "Dr. John Doe", specialization: "Cardiologist", image: doc1 },
  { name: "Dr. Jane Smith", specialization: "Dermatologist", image: doc2 },
  { name: "Dr. Alan Smithee", specialization: "General Practitioner", image: doc3 },
];

const pharmacies = [
  { name: "City Pharmacy", image: cityPharmacy },
  { name: "Green Health Pharmacy", image: greeHealthPharmacy },
  { name: "Wellness Pharmacy", image: wellnessPharmacy },
];

const hospitals = [
  { name: "General Hospital", image: generalHospital },
  { name: "Downtown Medical Center", image: downtownHospital },
  { name: "Sunrise Hospital", image: sunriseHospital },
];

const LandingPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative', 
          textAlign: 'center', 
          mb: 6, 
          py: 4, 
          background: 'linear-gradient(135deg, rgba(42,122,141,0.2), rgba(58,180,201,0.2))',
          borderRadius: 2 
        }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
          <Typewriter 
            text="WWelcome To The Virtual Doctor Platform" 
            speed={150} 
            style={{ display: 'inline-block' }}
          />
        </Typography>
        <Button variant="contained" color="primary">
          Get Diagnosis
        </Button>
      </Box>

      {/* Doctors Section */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Available Doctors
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={doctor.image}
                  alt={doctor.name}
                />
                <CardContent>
                  <Typography variant="h6">{doctor.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.specialization}
                  </Typography>
                  <Button variant="contained" size="small" sx={{ mt: 1 }}>
                    Book Appointment
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Pharmacies Section */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Pharmacies
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {pharmacies.map((pharmacy, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={pharmacy.image}
                  alt={pharmacy.name}
                />
                <CardContent>
                  <Typography variant="h6">{pharmacy.name}</Typography>
                  <Button variant="contained" size="small" sx={{ mt: 1 }}>
                    Order Medicines
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Hospitals Section */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Nearby Hospitals
      </Typography>
      <Grid container spacing={3}>
        {hospitals.map((hospital, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={hospital.image}
                  alt={hospital.name}
                />
                <CardContent>
                  <Typography variant="h6">{hospital.name}</Typography>
                  <Button variant="contained" size="small" sx={{ mt: 1 }}>
                    View Details
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ mt: 4, p: 2, backgroundColor: '#f0f9ff', textAlign: 'center' }}>
    <Typography variant="caption" color="textSecondary">
      © {new Date().getFullYear()} Virtual Doctor. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;

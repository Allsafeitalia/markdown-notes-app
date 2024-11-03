// src/components/Footer.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 4,
        py: 2,
        borderTop: '1px solid #ddd',
        color: '#666',
      }}
    >
      <Typography variant="body2">
        Made with{' '}
        <FavoriteIcon sx={{ color: 'red', verticalAlign: 'middle' }} /> by{' '}
        <a
          href="https://giuseppemastronardi.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#666', textDecoration: 'none' }}
        >
          giuseppemastronardi.dev
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;

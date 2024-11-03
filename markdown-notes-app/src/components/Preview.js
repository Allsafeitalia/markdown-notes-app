import React from 'react';
import { Box, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const Preview = ({ text }) => {
  return (
    <Box sx={{ mt: 2, p: 2, border: '1px solid #ddd', borderRadius: 2, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h6" gutterBottom>Anteprima</Typography>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Box>
  );
};

export default Preview;

import React from 'react';
import { TextField } from '@mui/material';

const Editor = ({ text, setText }) => {
  return (
    <TextField
      label="Editor"
      multiline
      rows={6}
      variant="outlined"
      fullWidth
      value={text}
      onChange={(e) => setText(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
};

export default Editor;

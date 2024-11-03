import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteList = ({ notes, setSelectedNote, deleteNote }) => {
  return (
    <List>
      {notes.map((note, index) => (
        <ListItem
          key={index}
          button
          onClick={() => setSelectedNote(index)}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <ListItemText primary={note.title || `Nota #${index + 1}`} />
          <IconButton edge="end" onClick={() => deleteNote(index)} color="secondary">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NoteList;

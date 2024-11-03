import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Editor from './components/Editor';
import Preview from './components/Preview';
import NoteList from './components/NoteList';
import Footer from './components/Footer';
import { saveToLocalStorage, loadFromLocalStorage } from './utils';

// Crea un tema MUI con il font Poppins
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const App = () => {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState(loadFromLocalStorage() || []);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  useEffect(() => {
    saveToLocalStorage(notes);
  }, [notes]);

  const addNewNote = () => {
    const newNote = { text: "", title: `Nota #${notes.length + 1}` };
    setNotes([...notes, newNote]);
    setText("");
    setSelectedNoteIndex(notes.length);
  };

  const updateNote = (text) => {
    if (selectedNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = { ...updatedNotes[selectedNoteIndex], text };
      setNotes(updatedNotes);
    }
    setText(text);
  };

  const selectNote = (index) => {
    const note = notes[index];
    if (note) {
      setSelectedNoteIndex(index);
      setText(note.text);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
    setNotes(updatedNotes);
    setSelectedNoteIndex(null);
    setText("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="md" sx={{ flex: 1, mt: 4, p: 2, boxShadow: 3, borderRadius: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h4" component="h1">
              App di Note in Markdown
            </Typography>
            <Button variant="contained" color="primary" onClick={addNewNote}>
              Nuova Nota
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 2, height: '100%', overflowY: 'auto' }}>
                <Typography variant="h6">Le tue note</Typography>
                <NoteList notes={notes} setSelectedNote={selectNote} deleteNote={deleteNote} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper elevation={3} sx={{ p: 2 }}>
                {selectedNoteIndex !== null ? (
                  <>
                    <Editor text={text} setText={updateNote} />
                    <Preview text={text} />
                  </>
                ) : (
                  <Typography variant="body1" color="text.secondary">
                    Seleziona una nota per iniziare a modificarla.
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
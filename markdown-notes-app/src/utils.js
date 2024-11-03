export const saveToLocalStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const loadFromLocalStorage = () => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  };
  
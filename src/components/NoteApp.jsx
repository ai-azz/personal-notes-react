import React, { useState } from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils';

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  return (
    <div className="note-app">
      <NoteHeader />
      <NoteBody
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
    </div>
  );
}

export default NoteApp;
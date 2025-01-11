import React, { useState } from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils';

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

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

  const onSearchChange = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="note-app">
      <NoteHeader searchKeyword={searchKeyword} onSearchChange={onSearchChange} />
      <NoteBody
        notes={filteredNotes}
        addNote={addNote}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
    </div>
  );
}

export default NoteApp;
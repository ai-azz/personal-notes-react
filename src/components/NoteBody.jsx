import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';

function NoteBody({ notes, addNote, deleteNote, archiveNote }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <h2>Tambah Catatan</h2>
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={activeNotes} onDelete={deleteNote} onArchive={archiveNote} />
      <h2>Arsip</h2>
      <NoteList notes={archivedNotes} onDelete={deleteNote} onArchive={archiveNote} />
    </div>
  );
}

export default NoteBody;
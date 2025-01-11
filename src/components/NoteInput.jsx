import React, { useState } from 'react';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxChar = 50;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && body.trim()) {
      addNote({
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      });
      setTitle('');
      setBody('');
    }
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="note-input__title"
        placeholder="Judul Catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, maxChar))}
      />
      <p className="note-input__title__char-limit">
        Sisa karakter: {maxChar - title.length}
      </p>
      <textarea
        className="note-input__body"
        placeholder="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default NoteInput;
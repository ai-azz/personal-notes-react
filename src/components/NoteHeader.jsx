import React from 'react';

function NoteHeader({ searchKeyword, onSearchChange}) {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <input type="text" id="search" className='note-app__search' placeholder='Cari catatan...' value={searchKeyword} onChange={(e) => onSearchChange(e.target.value)} />
    </header>
  );
}

export default NoteHeader;
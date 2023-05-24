import React, { useState } from 'react'
import Notes from './Notes'

export default function FormAdd() {
  const [note, setNote] = useState("")
  const [dataNote, setDataNote] = useState([])

  const handleInputNote = (e) => {
    setNote(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      const addNote = {
        note
      };
      setDataNote(prevData => [...prevData, addNote]);
      setNote('');
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title title">Title</h5>
          <form onSubmit={handleSubmit}>
            <input onChange={handleInputNote} value={note} className='input-note' type='text' placeholder='Take a note...' />
            {<button type="submit" className='btn-add'>+</button>}
          </form>
          {/* {dataEdit && <button type="submit" className='btn-update'>Update</button>} */}
        </div>
      </div>
      <Notes dataNote={dataNote} />
    </>
  );
}

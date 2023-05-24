import React, { useState, useEffect } from 'react';

export default function Notes({ dataNote }) {
  const [note, setNote] = useState([]);
  const [dataEdit, setDataEdit] = useState(null)

  const handleDelete = (index) => {
    const updatedNote = [...dataNote.slice(0, index), ...dataNote.slice(index + 1)];
    setNote(updatedNote);
  };
  useEffect(() => {
    setNote(dataNote);
  }, [dataNote]);
  const handleEdit =(item,index)=>{
    console.log(item);
    const newData = {
      index,
      item,
    }
    setDataEdit(newData)
  }
  return (
    <div id="notes" className="row container-fluid">
      <h3 style={{marginTop: '50px'}}>Show Notes</h3>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Note</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {note.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.note}</td>
              <td className="action-btn">
                <button onClick={()=>handleEdit(item,index)}className="btn btn-edit">Edit</button>
                <button onClick={() => handleDelete(index)} className="btn btn-delete">
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

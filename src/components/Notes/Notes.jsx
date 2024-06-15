import React, { useEffect, useState } from 'react';
import CreateNote from './CreateNote';
import '../../styles/notes.scss';
import { v4 as uuid } from 'uuid';
import Note from './Note';

const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("Notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const saveLocalStorage = (updatedNotes) => {
    localStorage.setItem("Notes", JSON.stringify(updatedNotes));
  };

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const saveHandler = () => {
    let updatedNotes;
    if (editToggle) {
      updatedNotes = notes.map((note) =>
        note.id === editToggle ? { ...note, text: inputText } : note
      );
    } else {
      updatedNotes = [
        ...notes,
        {
          id: uuid(),
          text: inputText
        }
      ];
    }
    setNotes(updatedNotes);
    saveLocalStorage(updatedNotes);
    setInputText("");
    setEditToggle(null);
  };

  const deleteHandler = (id) => {
    const updatedNotes = notes.filter(n => n.id !== id);
    setNotes(updatedNotes);
    saveLocalStorage(updatedNotes);
  };

  return (
    <div className='notes'>
      {notes.map((note) => (
        editToggle === note.id ?
          <CreateNote
            key={note.id}
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
          :
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
      ))}
      {editToggle === null &&
        <CreateNote
          inputText={inputText}
          setInputText={setInputText}
          saveHandler={saveHandler}
        />
      }
    </div>
  );
};

export default Notes;

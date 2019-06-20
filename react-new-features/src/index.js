import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
  switch(action.type) {
    case 'POPULATE_NOTES':
      return action.notes
    case 'ADD_NOTE':
      return [
        ...state,
        { title: action.title, body: action.body }
      ]
    case 'REMOVE_NOTE':
      return state.filter(note => note.title !== action.title)
    default: 
      return state
  }
}

const NoteApp = () => {
  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispatch({
        type: 'POPULATE_NOTES',
        notes
      })
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note
          key={note.title}
          note={note}
          removeNote={removeNote}
        />
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add note</button>
      </form>
    </div>
  )
}

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('setting up effect...')
    return () => {
      console.log('Cleaning up effect...')
    }

  }, [])

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  )
}

ReactDOM.render(<NoteApp />, document.getElementById('root'));


serviceWorker.unregister();

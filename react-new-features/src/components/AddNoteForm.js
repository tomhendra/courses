import React, { useState } from 'react';

const addNoteForm = ( {addNote, title, body } ) => {
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

  return (
    <form onSubmit={addNote}>
    <input value={title} onChange={(e) => setTitle(e.target.value)} />
    <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
    <button>Add note</button>
  </form>
  )
}

export { addNoteForm as default }
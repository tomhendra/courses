import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// useState built-in hook can manipulate state without having to use class based components
// state doesn't have to be an object
// can call useState as many times as needed in any given component
// when using useState you completely replace previous state (as opposed to merging with objects)
// returns an array of 2 things:
// 1. current state 
// 2. a function to change the state

// useEffect is similar to a combination of componentDidMount & componentDidUpdate
// runs once immediately (mount) and again when state or props change
// can call useEffect as many times as needed in any given component 
// (componentDidMount in class based components could only be called once)
// second argument (dependency array) specifies which effects should be monitored
// passing an empty dependency arry means useEffect will only run once, as there are no dependencies to depend on! (a complete mirror of componentDidMount)
// 2nd argument is optional but it is good practice to be explicit about what effects useEffect depends on

const App = (props) => {  

  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('test')

  useEffect(() => {
    console.log('This should ony run once')
  }, [])

  useEffect(() => {
    console.log('useEffect ran')
    document.title = count
  }, [count])

  return (
    <div>
      <p>The current {text || 'count' } is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  );
}

App.defaultProps = {
  count: 0
}

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      { title, body }
    ])
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    setNotes(notes.filter(note => note.title !== title))
  }

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    notesData && setNotes(notesData)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])


  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>X</button>
        </div>
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

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

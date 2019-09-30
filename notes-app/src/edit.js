import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const dateEl = document.querySelector('#last-edited')
const removeEl = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

// Modify note title with new input & save
titleEl.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

// Modify note body with new input from textarea & save
bodyEl.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

// Call removeNote on button click and redirect to index.html
removeEl.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('/index.html')
})

// Update duplicate tabs / windows using storage event listener -- REFACTOR DRY CODE LATER
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})
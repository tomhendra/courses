const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const dateEl = document.querySelector('#last-edited')
const removeEl = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()

// Get note object from array with ID matching noteID & assign to note variable
let note = notes.find((note) => note.id === noteId)
// redirect to index if not found
if (note === undefined) {
    location.assign('/index.html')
}

// Populate input elements with data
titleEl.value = note.title
bodyEl.value = note.body
dateEl.textContent = generateLastEdited(note.updatedAt)

// Modify note title with new input & save
titleEl.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// Modify note body with new input from textarea & save
bodyEl.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// Call removeNote on button click and redirect to index.html
removeEl.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

// Update duplicate tabs / windows using storage event listener -- REFACTOR DRY CODE LATER
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        if (note === undefined) {
            location.assign('/index.html')
        }
        titleEl.value = note.title
        bodyEl.value = note.body    
        dateEl.textContent = generateLastEdited(note.updatedAt)
    }
})

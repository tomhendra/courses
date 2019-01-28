const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()

// Get note object from array with ID matching noteID & assign to note variable
const note = notes.find(function (note) {
    return note.id === noteId
})
// redirect to index if not found
if (note === undefined) {
    location.assign('/index.html')
}

// Populate note title input with content & modify with new input
titleEl.value = note.title
titleEl.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

// Populate note body textarea with content & modify with new input
bodyEl.value = note.body
bodyEl.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

// Call removeNote on button click and redirect to index.html
removeEl.addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

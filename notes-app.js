const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// Listen for Create Note button click 
document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

// Listen for Search Text input & render notes again once user interacts with input
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

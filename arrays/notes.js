const notes = [{
    title: 'My next trip',
    body: 'I would like to go to NZ'
}, {
    title: 'Habits to work on',
    body: 'Study more. Less tapas.'
}, {
    title: 'Office modifications',
    body: 'Buy new chair'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, query) {
    return notes.find(function (item, index) {
        return item.title.toLowerCase() === query.toLowerCase()
    })
}

const filterNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNote(notes, 'office modifications'))
// console.log(filterNotes(notes, 'study'))

sortNotes(notes)
console.log(notes)

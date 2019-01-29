const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// Call function once so something appears on page load
renderTodos(todos, filters)

// FILTER --- Listen for Search Text input & render todos again once user interacts with input
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// HIDE --- Listen for change to checkbox
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// ADD --- Add todo to the list & re-render 
document.querySelector("#add-todo").addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''
})

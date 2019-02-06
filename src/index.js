import { setFilters } from './filters'
import { renderTodos } from './views'
import { createTodo } from './todos'

renderTodos()

// FILTER --- Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// HIDE --- LSet up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// ADD --- Set up form submission handler
document.querySelector('#add-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.todoText.value
    e.preventDefault()
    if (text.length > 0) {
        createTodo(text)
    }
    renderTodos()
    e.target.elements.todoText.value = ''
})

// Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        renderTodos()
    }
})
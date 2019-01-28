// Fetch existing todos from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Toggle todo completed based on given id
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Remove a todo based on given id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const renderTodos = function (todos, filters) {
    // Create new array of todos based on text input & checkbox
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    // Create new array of incomplete todos from filtered list
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    // Clear todos before displaying filtered list
    document.querySelector('#todo-list').innerHTML = ''

    // Display summary of uncompleted todos
    document.querySelector('#todo-list').appendChild(generateSummaryDOM(incompleteTodos)) 

    // Display list of filtered todos
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todo-list').appendChild(generateTodoDom(todo))
    })
}

// Get the DOM elements for an individual todo
const generateTodoDom = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup text span
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup remove button
    removeButton.textContent = 'Remove'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}

 
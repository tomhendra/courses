const todos = [{
    text: 'Pick up Maria',
    completed: true
}, {
    text: 'Read YDKJS',
    completed: false
}, {
    text: 'Buy beer',
    completed: false
}, {
    text: 'Take out avocado from the freezer',
    completed: true
}, {
    text: 'Complete some Codewars challenges',
    completed: false
}]

// Sort todos by non-completed items first
const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

// Delete todo item based on matching string argument
const deleteTodo = function (todosArr, todosItem) {
    const match = todosArr.findIndex(item => item.text.toLowerCase() === todosItem.toLowerCase())
    if (match > -1) {
        todosArr.splice(match, 1)
    }
}

// Return filtered array of non-completed todos
const getThingsToDo = function (todosArr) {
    return todosArr.filter(function (item, index) {
        return !item.completed
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

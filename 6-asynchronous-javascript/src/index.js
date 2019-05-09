// ========================
// ASYNCHRONOUS JAVASCRIPT
// ========================
// - obtaining information we don't have yet
// - web browser or node.js allow us to interact with things outside of the JavaScript world with asynchronous code
// - asynchronous functions are functions that we can execute later
// - JavaScript is single threaded - has only one call stack - only executes one thing at a time (synchronous)
// - asynchronous code enables JavaScript to be non-blocking with callback functions


// ----------------------------------------------------------------------------------------------------------
// Promises
// - a promise (ES6) is an object that may produce a single value sometime in the future -- either a resolved value, 
//   or a reason that it's not resolved (rejected)
// - a promise may be in one of three possible states: 
//   1. fulfilled (resolved)
//   2. rejected
//   3. pending
// ----------------------------------------------------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke');
    }
})

// promise chaining
promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('Error!')) // catches any errors that happen in between the .then chaining
    .then(result3 => {
        throw Error // results in uncaught error
        console.log(result3 + '!')
    })

// promise all
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hello, ')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hello, ')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })

// real world example
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results)
}).catch(() => console.log('API Error'))

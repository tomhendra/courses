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
// - a promise (ES6) is an object that may produce a single value sometime in the future -- either a 
//   resolved value, or a reason that it's not resolved (rejected)
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

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
}).catch(() => console.log('Error'))


// ----------------------------------------------------------------------------------------------------------
// Async Await
// - part of ES8 and built on top of promises
// - async function returns a promise, but makes code easier to read (syntactic sugar)
// - goal is to make asynchronous code look synchronous
// - await keyword says "pause this function until I have something for you"
// - 
// ----------------------------------------------------------------------------------------------------------

// using fetch function (which is a promise)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(results => {
        console.log(results)
    })

// Async
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}
fetchUsers()

// real world example
const urls2 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
    // ES6 destructuring
    const [ users, posts, albums ] = await Promise.all(urls2.map(url => 
        fetch(url).then(resp => resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
    }
    catch(err) {
        console.log('Error', err)
    }
}
getData()

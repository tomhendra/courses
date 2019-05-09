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
// Async Await (ES8)
// - part of ES8 and built on top of promises
// - async function returns a promise, but makes code easier to read (syntactic sugar)
// - goal is to make asynchronous code look synchronous
// - await keyword says "pause this function until I have something for you"
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


// ----------------------------------------------------------------------------------------------------------
// ES9 (2018)
// ----------------------------------------------------------------------------------------------------------

// object spread operator extends ES6 spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const { tiger, ...rest } = animals // destructuring to retrieve properties from animals using rest operator
console.log(tiger) // tiger
console.log(rest) // lion, monkey & bird

// finally - always called whether resolve or reject
Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
)).then(array => {
    throw Error
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
})
.catch(err => console.log('Error', err))
.finally(() => console.log('Extra')) // finally is good to run code no matter what the result of the promise

// for await of -- iterator allowing to loop through multiple promises
// - takes each item from an array of promises that returns to us in the correct order the responses
const urls3 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData2 = async function() {
    const arrayOfPromises = urls3.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data)
    }
}
getData2()


// ----------------------------------------------------------------------------------------------------------
// Job queue
// - ES6 update to JavaScript runtime
// - Event loop changed to accommodate promises 
// - callback queue AKA task queue behaviour was changed after promises allowed a native way to handle 
//   async code
// - ECMAScript decided another queue was needed alongside web API's callback queue -- the job queue AKA 
//   microtask queue
// - job queue has higher priority than callback queue
// - event loop now checks job queue before looking at callback queue 
// ----------------------------------------------------------------------------------------------------------

// callback queue / task queue
setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

//2 -- job queue / microtask queue
Promise.resolve('hi').then((data)=> console.log('2', data))

//3
console.log('3','is a crowd')


// ----------------------------------------------------------------------------------------------------------
// Parallel, sequence and race
// ----------------------------------------------------------------------------------------------------------

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)

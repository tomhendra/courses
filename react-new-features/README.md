**Notes on new features in React**

## Hooks

### useState
- a built-in hook can manipulate state without having to use class based components
- state doesn't have to be an object
- can call useState as many times as needed in any given component
- when using useState you completely replace previous state (as opposed to merging with objects)
- returns an array of 2 things:
  1. current state 
  2. a function to change the state

### useEffect
- is similar to a combination of `componentDidMount` & `componentDidUpdate`
- runs once immediately (mount) and again when state or props change
- can call useEffect as many times as needed in any given component (`componentDidMount` in class based components could only be called once)
- second argument (dependency array) specifies which effects should be monitored
- passing an empty dependency array means useEffect will only run once, as there are no dependencies to depend on! (a complete mirror of `componentDidMount`)
- 2nd argument is optional but it is good practice to be explicit about what effects useEffect depends on
- optional clean up function can be returned from within the function passed to useEffect, causing similar behaviour to `componentDidUnmount`

### useReducer
- simpler way to describe complex state changes
- ability to not have to pass props around
- need to define a reducer function before we can call useReducer
- reducer function will look identical to what is created for Redux
- not a replacement for Redux, but for simple state management using the hooks API is an option
- pass in two things:
  1. reducer function
  2. initial state
- returns an array of 2 things:
  1. the state
  2. a dispatch function
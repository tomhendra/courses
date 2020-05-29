// Type: Easy way to refer to he different properties & functions that a value has
// every value has a type in JavaScript... every... single... one!

// Two different categories of types in TypeScript: Primitive types and Object types

/* Primitive types - basic types
 - number
 - boolean
 - void
 - undefined
 - string
 - symbol
 - null
*/

/* Object types - any types built in to the language or types created by us
 - functions
 - arrays
 - classes
 - objects
 - any types created by the developer (us)
*/

const today = new Date();

today.getMonth();

const person = {
  age: 20
};

class Color {}

const Red = new Color();

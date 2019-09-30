// ======================
// JAVASCRIPT FOUNDATION
// ======================

// ----------------------------------------------------------------------------------------------------------
// Exercise 1 -- Fix This Code
// ----------------------------------------------------------------------------------------------------------

// fill array with 60000 elements
/* 
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();
    }
};
 
removeItemsFromList();
*/

// solution
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        setTimeout(removeItemsFromList, 0);
    }
};
 
removeItemsFromList();


// ----------------------------------------------------------------------------------------------------------
// Hoisting
// ----------------------------------------------------------------------------------------------------------

a();
console.log(one);
var one = 1;
var one = 2;
function a() {
  console.log('hi')
}

function a() {
  console.log('bye')
}

var favouriteFood = "grapes";

var foodThoughts = function () {
     console.log("Original favourite food: " + favouriteFood);

     var favouriteFood = "sushi";

     console.log("New favourite food: " + favouriteFood);
};

foodThoughts()

// P.s. when you change the 'var' to 'const' technically there is still hoisting happening. That is why you get a reference error instead of looking at the global favouriteFood variable. let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So the engine says, "ya there is a favouriteFood variable here but you can't access it yet"


// ----------------------------------------------------------------------------------------------------------
// Function invocation & arguments keyword
// ----------------------------------------------------------------------------------------------------------

// Function Expression
var canada = () => console.log('cold')
// Function Declaration
function india() {
  console.log('warm')
}

// Function Invocation, Calling, Execution
canada()
india()

function india() {
  console.log(arguments)
  console.log('warm')
}

india()

//arguments
function marry(person1, person2) {
  console.log(arguments)
  console.log(Array.from(arguments))
  return `${person1} is now married to ${person2}`
}

function marry2(...args) {
  console.log(args)
  console.log(Array.from(arguments))
  return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina')


// ----------------------------------------------------------------------------------------------------------
// Variable environment
// ----------------------------------------------------------------------------------------------------------

function two() {
    var isValid; // 5. isValid is undefined in this execution context.
  }
  
  function one() {
    var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
    two(); // 4. New execution context created.
  }
  
  var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
  one() // 2. New execution context is created on top of the stack.


// ----------------------------------------------------------------------------------------------------------
// Scope chain
// ----------------------------------------------------------------------------------------------------------

function sayMyName() {
    var a = 'a';
    return function findName() {
      var b = 'b';
      console.log(c)
      return function printName() {
        var c = 'c';
        return 'Andrei Neagoie'
        }
    }
}
  
sayMyName()()()

function findName() {
var b = 'b';
return printName();
}

function printName() {
var c = 'c'
return 'Andrei Neagoie'
}

function sayMyName() {
var a = 'a';
return findName()
}

sayMyName()


// ----------------------------------------------------------------------------------------------------------
// JavaScript is weird
// ----------------------------------------------------------------------------------------------------------

// Weird Javascript #1 - it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.
function weird() {
    height = 50
  }
  
  var heyhey = function doodle() {
    // code here
  }
  
  heyhey();
  doodle(); // Error! because it is enclosed in its own scope.

// ----------------------------------------------------------------------------------------------------------
// Block scope vs Function scope
// ----------------------------------------------------------------------------------------------------------

//Function Scope
function loop() {
    for( var i = 0; i < 5; i++) {
      console.log(i);
    }
    console.log(i)
  }
  
  //Block Scope
  function loop2() {
    for( let i = 0; i < 5; i++) {
      console.log(i);
    }
    console.log(i)
  }


// ----------------------------------------------------------------------------------------------------------
// This keyword
// ----------------------------------------------------------------------------------------------------------

//! -- 'this' is the object that the function is a property of...

const obj = {
    name: 'Billy',
    sing: function() {
      return 'llala ' + this.name + '!'
    },
    singAgain: function() {
      return this.sing()
    }
  }
  
function importantPerson() {
console.log(this.name)
}

const name = 'Sunny';
const obj1 = { name: 'Cassy', importantPerson: importantPerson}
const obj2 = { name: 'Jacob', importantPerson: importantPerson}

obj2.importantPerson()


// ----------------------------------------------------------------------------------------------------------
// Dynamic scope vs Lexical scope
// ----------------------------------------------------------------------------------------------------------
const a = function() {
    console.log(this)
    const b = function() {
      console.log(this)
      const c = {
        hi: function() {
       console.log(this)
      }}
      c.hi()
    }
    b()
  }
  
  a()
  
  //JS is weird:
  const obj = {
    name: 'Billy',
    sing: function() {
      console.log(this) // in this case, it's a method on an object.
      var anotherFunc = function() {
        console.log(this)// this points to window!
      }
    }
  }


// ----------------------------------------------------------------------------------------------------------
// call(), apply() & bind()
// ----------------------------------------------------------------------------------------------------------

const wizard = {
name: 'Merlin',
health: 100,
heal: function(num1, num2) {
    this.health += num1 + num2;
}
}

const archer = {
name: 'Robin Hood',
health: 50
}

wizard.heal.call(archer, 50, 60)
wizard.heal.apply(archer, [20, 30])
archer
// function borrowing

const healArcher = wizard.heal.bind(archer, 50, 60);
console.log(archer)
healArcher()
console.log(archer)

// exercise
const array = [1,2,3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
  return Math.max.apply(null, arr);  
}

getMaxNumber(array) // should return 3

// ----------------------------------------------------------------------------------------------------------
// bind() & currying
// ----------------------------------------------------------------------------------------------------------
function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

// ----------------------------------------------------------------------------------------------------------
// Exercise 3 -- this Keyword 2
// Run this code, and you will see there is an issue. How would you fix it?
// ----------------------------------------------------------------------------------------------------------

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character); // added .bind(character);
 
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't
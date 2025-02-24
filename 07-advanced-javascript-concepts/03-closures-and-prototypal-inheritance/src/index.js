// ==================================
// CLOSURES & PROTOTYPAL INHERITANCE 
// ==================================

// ----------------------------------------------------------------------------------------------------------
// Higher Order Functions
// ----------------------------------------------------------------------------------------------------------

const giveAccessTo = (name) =>
  'Access Granted to ' + name;

function authenticate(person) {
  let array = [];
  // you can add checks here for person.level
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

function sing(person) {
  return 'la la la my name is ' + person.name
}

letPerson({level: 'user', name: 'Tim'}, sing)


// ----------------------------------------------------------------------------------------------------------
// Exercise 1 -- Higher Order Functions: multiplyBy
// ----------------------------------------------------------------------------------------------------------

const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(10));
console.log(multiplyByTwo(20));


// ----------------------------------------------------------------------------------------------------------
// Closures
// Two important things they provide:
// - 1) Memory efficient
// - 2) Encapsulation
// ----------------------------------------------------------------------------------------------------------

function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}
  
a()
  
//closures and higher order function
function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`${string} ${name} ${name2}`)
    }
  }
}

const boo2 = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)

boo('hi')('john')('tanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo2('sing');
booStringName = booString('John');
booStringNameName2 = booStringName('tanya')

// Memory
function heavyDuty(index) {
  const bigArray = new Array(7000).fill('😄')
  console.log('created!');
  return bigArray[index]
}

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(699)
getHeavyDuty(699)
getHeavyDuty(699)

// but i don't want to pollute the global namespace..
function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄')
  console.log('created Again!')
  return function(index) {
    return bigArray[index]
  }
}


// ----------------------------------------------------------------------------------------------------------
// Closures & Encapsulation
// - hiding information that is unnecessary for access outside, principle of least privilege
// ----------------------------------------------------------------------------------------------------------

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '💥';
  }

  setInterval(passTime, 1000);
  return {totalPeaceTime}
}

const ww3 = makeNuclearButton();
ww3.totalPeaceTime()

// ----------------------------------------------------------------------------------------------------------
// Exercise -- Closures 2
// ----------------------------------------------------------------------------------------------------------

let view;
function initialize() {
  let called = 0;
  return function() {
    if (called > 0) {
      return
    } else {
      view = '🏔';
      called = true;
      console.log('view has been set!')
    }

  }
}

const start = initialize();
start();
start();
start();
console.log(view)


// ----------------------------------------------------------------------------------------------------------
// Exercise -- Closures 3
// ----------------------------------------------------------------------------------------------------------

// const array = [1,2,3,4];
// for(let i=0; i < array.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + array[i])
//   }, 3000)
// }


const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function(){
      console.log('I am at index ' + array[closureI])
    }, 3000)
  })(i)
}

// ----------------------------------------------------------------------------------------------------------
// Prototypal Inheritance
// - An object getting the properties and methods of another object through the prototype chain
// ----------------------------------------------------------------------------------------------------------

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}
// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
console.log(lizard.fire)
console.log(lizard.sing())
const lizardFire =dragon.sing.bind(lizard)
console.log(lizardFire())

//Every Prototype chain links to a prototype object{}
function multiplyBy5(num) {
  return num*5
}

multiplyBy5.__proto__
Function.prototype
multiplyBy5.__proto__.__proto__
Object.prototype
multiplyBy5.__proto__.__proto__.__proto__
typeof Object
typeof {}

// Create our own prototypes:
var human = {mortal: true}
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true

//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

Date.prototype.lastYear = function(){
  return this.getFullYear() - 1;
}//'1899'


//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
Array.prototype.map = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i] + '🗺'));
  }
  return arr;
}
console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺

// Exercise - Prototypal Inheritance with this
// How would you be able to create your own .bind() method using call or apply. 

Function.prototype.bind = function(whoIsCallingMe){
  const self = this;
  return function(){
    return self.apply(whoIsCallingMe, arguments);
  };
}
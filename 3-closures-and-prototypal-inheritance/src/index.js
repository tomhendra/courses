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

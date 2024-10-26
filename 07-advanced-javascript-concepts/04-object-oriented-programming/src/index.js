// ============================
// OBJECT ORIENTED PROGRAMMING 
// ============================
// - In all programs there are two primary components: Data (in memory) & Behaviour (functions)
// - Objects allow us to use prototypal inheritance
// - OOP: Bringing together the data and behaviour in a single location, makes it easier to understand how programs work
// - FP: Data & behaviour are distinctly different things and should be kept separate for clarity
// - It's not about OOP vs FP... Using both paradigms in unison makes for beautiful programs! :)
// - Goals:
//   - clear * understandable
//   - easy to extend
//   - easy to maintain
//   - memory efficient
//   - DRY

// ----------------------------------------------------------------------------------------------------------
// Factory functions
// - functions that act like factories - they create objects for us
// ----------------------------------------------------------------------------------------------------------

// factory function make/create
function createElf1(name, weapon) {
    //we can also have closures here to hide properties from being changed.
    return {
      name: name,
      weapon: weapon,
      attack() {
        return 'attack with ' + weapon
      }
    }
  }

// modified to avoid attack method being stored in multiple spaces in memory for multiple elf instances
  const elfFunctions = {
    attack: function() {
      return 'attack with ' + this.weapon
    }
  }
  function createElf(name, weapon) {
    //Object.create creates __proto__ link -- pure prototypal inheritance 
    newElf = Object.create(elfFunctions)
    newElf.name = name;
    newElf.weapon = weapon
    return newElf
  }
  
  const tom = createElf('Tom', 'bow');
  const parker = createElf('Parker', 'bow');
  tom.attack()
  parker.attack()


// ----------------------------------------------------------------------------------------------------------
// Constructor functions
// - Uses 'new' keyword to create object instances - automatically returns object and creates constructor
// - All constructor functions should start with capital letter to let other devs know the 'new' keyword 
//   must be used
// - 'new' keyword points 'this' to execution context just created for the calling object, instead of the 
//    window object
// ----------------------------------------------------------------------------------------------------------

function MarshElf(name, weapon) {
    // The ONLY way to add properties to a constructor function is to use the 'this' keyword
    this.name = name;
    this.weapon = weapon;
  }
  
  // one space in memory used for method using prototype
  // although all functions have the prototype property, only constructor functions have a use for it
  MarshElf.prototype.attack = function() { 
    return 'attack with ' + this.weapon
  }

  const sam = new MarshElf('Sam', 'bow');
  const peter = new MarshElf('Peter', 'bow');
  sam.attack()
  peter.attack()


// ----------------------------------------------------------------------------------------------------------
// ES6 Classes
// - syntactic sugar to simulate classes, using prototypal inheritance under the hood 
// - classes in JavaScript are still objects, just like everything else.
// - classes AKA pseudoclassical inheritance
// ----------------------------------------------------------------------------------------------------------

class WoodElf {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'attack with ' + this.weapon
    }
  }
  
  const fiona = new WoodElf('Fiona', 'ninja stars');
  console.log(fiona instanceof WoodElf) // 
  const ben = new WoodElf('Ben', 'bow');
  fiona.attack()


// ----------------------------------------------------------------------------------------------------------
// this keyword review
// - this - 4 ways...
// ----------------------------------------------------------------------------------------------------------

// new binding -- assign this to instantiated object
function Person(name, age) {
    this.name = name;
    this.age =age;
    console.log(this);
}
  
const person1 = new Person('Xavier', 55)
  
// implicit binding -- most common
const person = {
    name: 'Karen',
    age: 40,
    hi() {
      console.log('hi ' + this.name)
    }
}

person.hi()
  
//explicit binding -- dictate exactly what this should refer to
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function() {
      console.log('hi ' + this.setTimeout)
    }.bind(window)
}
  
person3.hi()
  
// arrow functions -- forces normal behaviour of dynamically scoped this to be lexically scoped
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
      var inner = () => {
        console.log('hi ' + this.name)
      }
      return inner()
    }
}
  
person4.hi()


// ----------------------------------------------------------------------------------------------------------
// Inheritance
// - instances are when we use the new keyword we create a new instance of a class
// - inheritance is when we use the extends keyword to inherit something from a higher class
// - inheritance doesn't copy functionality in JavaScript. It links up the prototype chain using prototypal 
//   inheritance
// ----------------------------------------------------------------------------------------------------------

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character { // extend and assign __proto__ to superclass of Character
    constructor(name, weapon, type) {
        // console.log('what am i?', this); // gives an error before calling super()
        super(name, weapon) // call superclass (Character)
        console.log('what am i?', this);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() { // this is like extending our prototype.
        return 'strongest fort in the world made'
    }
}

const houseElf = new Elf('Dolby', 'cloth', 'house')
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(Ogre.prototype.isPrototypeOf(shrek)) // true
console.log(Character.prototype.isPrototypeOf(Ogre.prototype)) // true
// better way to check prototype links is with instanceof...
console.log(houseElf instanceof Elf) // true
console.log(houseElf instanceof Character) // true


// ----------------------------------------------------------------------------------------------------------
// Four pillars of OOP:
// 1) Encapsulation
//    - organising things into boxes that are related to one another so they can interact
// 2) Abstraction
//    - hiding complexity from users.
// 3) Inheritance
//    - avoid DRY code & save memory space by having shared methods
// 4) Polymorphism
//    - ability to call the same method on different objects & each object responding in a different way
// ----------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------
// Exercise -- polymorphism
// - extend the Character class to have a Queen class.
// - create a new instance with the queen having (name, weapon, type). Type includes: 'hearts', 'clubs', 
//   'spades', 'diamonds'
// - console.log the attack() method in Character class AND return another string: 'I am the Victoria 
//    of hearts, now bow down to me! 
// ----------------------------------------------------------------------------------------------------------
class CharacterTwo {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'attack with ' + this.weapon
    }
}

class Queen extends CharacterTwo {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
    attack() {
        console.log(super.attack());
        return `I am ${this.name} of ${this.type}, now bow down to me!`
      }
}

const victoria = new Queen('Victoria', 'army', 'hearts');
console.log(victoria.attack());

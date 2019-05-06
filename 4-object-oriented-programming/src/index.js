// ============================
// OBJECT ORIENTED PROGRAMMING 
// ============================
// - In all programs there are two primary components: Data (in memory) & Behaviour (functions)
// - Objects allow us to use prototypal inheritance
// - OOP: Bringing together the data and behaviour in a single location, makes it easier to understand how programs work
// - FP: Data & behaviour are distinctly different things and should be kept separate for clarity
// - It's not about OOP vs FP... Using both paradigms in unison makes for beautiful programs! :)


// ----------------------------------------------------------------------------------------------------------
// Factory functions
// - functions that act like factories - they create objects for us
// ----------------------------------------------------------------------------------------------------------

// factory function make/create
function createElf(name, weapon) {
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
  
  const sam = createElf('Sam', 'bow');
  const peter = createElf('Peter', 'bow');
  sam.attack()
  peter.attack()


// ----------------------------------------------------------------------------------------------------------
// Constructor functions
// - Uses 'new' keyword to create object instances - automatically returns object and creates constructor
// - All constructor functions should start with capital letter to let other devs know the 'new' keyword 
//   must be used
// - 'new' keyword points 'this' to execution context just created for the calling object, instead of the 
//    window object
// ----------------------------------------------------------------------------------------------------------

function Elf(name, weapon) {
    // The ONLY way to add properties to a constructor function is to use the 'this' keyword
    this.name = name;
    this.weapon = weapon;
  }
  
  // one space in memory used for method using prototype
  // although all functions have the prototype property, only constructor functions have a use for it
  Elf.prototype.attack = function() { 
    return 'attack with ' + this.weapon
  }

  const sam = new Elf('Sam', 'bow');
  const peter = new Elf('Peter', 'bow');
  sam.attack()
  peter.attack()


// ----------------------------------------------------------------------------------------------------------
// ES6 Classes
// - syntactic sugar to simulate classes, using prototypal inheritance under the hood 
// - classes in JavaScript are still objects, just like everything else.
// - classes AKA pseudoclassical inheritance
// ----------------------------------------------------------------------------------------------------------

class Elf {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'attack with ' + this.weapon
    }
  }
  
  const fiona = new Elf('Fiona', 'ninja stars');
  console.log(fiona instanceof Elf) // 
  const ben = new Elf('Ben', 'bow');
  fiona.attack()

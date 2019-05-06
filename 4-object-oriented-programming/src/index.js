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
// function createElf(name, weapon) {
//     //we can also have closures here to hide properties from being changed.
//     return {
//       name: name,
//       weapon: weapon,
//       attack() {
//         return 'attack with ' + weapon
//       }
//     }
//   }

// modified to avoid attack method being stored in multiple spaces in memory for multiple elf instances
  const elfFunctions = {
    attack: function() {
      return 'attack with ' + this.weapon
    }
  }
  function createElf(name, weapon) {
    //Object.create creates __proto__ link
    newElf = Object.create(elfFunctions)
    newElf.name = name;
    newElf.weapon = weapon
    return newElf
  }
  
  const sam = createElf('Sam', 'bow');
  const peter = createElf('Peter', 'bow');

  sam.attack()
  peter.attack()
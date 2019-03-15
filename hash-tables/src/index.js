// ============
// HASH TABLES
// ============
// - hash tables are used to store key-value pairs
// - AKA hash maps
// - like arrays, but the keys are not ordered
// - unlike arrays, hast tables are fast for all of the following operations:
//     - finding values
//     - adding new values
//     - removing values
//
// - nearly every programming language has some sort of hash table data structure
// - because of their speed, hsh tables are very commonly used
//     - Python has dictionaries
//     - JavaScript has objects and maps
//     - Java, Go & Scala have maps *
//     - Ruby has hashes
//     * objects have some restrictions, but are basically hashes
// 
// - the hash part:
//     - in order to look up values by key, we need a way to convert keys into valid array indices
//     - a function which performs this task is called a hash function
//
// - what makes a good hash? (not a cryptographically secure one)
//     - fast (i.e. constant time)
//     - doesn't cluster outputs  specific indices, but distributes uniformly
//     - deterministic (same input yields same output)

// basic hash function that works on strings only
function hashSimple (key, arrayLen) {
    let total = 0;
    for (let char of key) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96 // -96 gives alphabetical order of char
      total = (total + value) % arrayLen; // using modulo ensures returned index is within specified array length
    }
    return total;
  }

// - refining our hash functions - there are problems:
//     - only hashes strings
//     - not constant time - linear in key length
//     - could be a little more random
function hash (key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) { // whichever is smaller between key length & first 100 chars will be looped
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }
// - why prime numbers? it's complicated!
//     - the prime number is useful in spreading out the keys more uniformly 
//     - it's also helpful if the array being added to has a prime length
//     - you don't need to know why (the maths is complicated!) 
// - use an array length that is prime to help avoid collisions!

// ========================
// DEALING WITH COLLISIONS
// ========================
// - even with a large array and a great hash function, collisions are inevitable
// - there are many strategies or dealing with collisions, but we'll focus on two:
//     - separate chaining
//     - linear probing
//
// - with separate chaining:
//     - at each index in our array e store values using a more sophisticated data structure (e.g. an array or linked list)
//     - this allows us to store multiple key-value pairs at the same index
// - with linear probing:
//     - when we find a collision, we search through the array to find the next empty slot
//     - unlike with separate chaining, this allows us to store  single key-value at each index

class HashTable {
    constructor(size=53) {
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- set
// - accepts a key and a value
// - hashes the key
// - stores the key-value pair in the hash table array via separate chaining
// ----------------------------------------------------------------------------------------------------------
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- get
// - accepts a key
// - hashes the key
// - retrieves the key-value pair in the hash table array
// - of they key isn't found, return undefined
// ----------------------------------------------------------------------------------------------------------
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- keys / values
// - loops through the hash table array and returns an array of keys in the table
// ----------------------------------------------------------------------------------------------------------
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
  }

  let ht = new HashTable();
  ht.set("maroon","#800000")
  ht.set("yellow","#FFFF00")
  ht.set("olive","#808000")
  ht.set("salmon","#FA8072")
  ht.set("lightcoral","#F08080")
  ht.set("mediumvioletred","#C71585")
  ht.set("plum","#DDA0DD")
  console.log(ht);
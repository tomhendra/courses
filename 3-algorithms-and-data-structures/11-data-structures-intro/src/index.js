// - Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
// - Different data structures excel at different things.  Some are highly specialized, while others (like arrays) are more generally used.
// - Working with map/location data? -- Use a graph!
// - Need an ordered list with fast inserts/removals at the beginning and end? -- Use a linked list!
// - Web scraping nested HTML? -- Use a tree!
// - Need to write a scheduler? -- Use a binary heap!
// - JavaScript doesn't include any of the data structures forthcoming, so we need to implement them ourselves, using JavaScript class syntax.

// ====================
// ES2015 CLASS SYNTAX
// ====================
// - a class is a blueprint for creating objects with pre-defined properties and methods
// - the method to create new objects MUST be called constructor
// - the class keyword creates a constant, so you cannot redefine it 
// - syntax example
class Student { // must start with capital letter
    constructor(firstName, lastName, year) {
        this.firstName = firstName; // inside all of our instance methods and constructor, the keyword 'this' refers to the object created from that class (also known as an instance)
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() { // -- instance methods pertain to a single instance of the object
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }  
    static enrollStudents() { // -- class methods allow us to define functionality pertinent to classes, using the static keyword. Static methods are called without instantiating their class & cannot be called through a class instance. Often used to create utility functions for an application - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
        return "ENROLLING STUDENTS!"
    }
}

let firstStudent = new Student("Tom", "Hendra",1); // object instantiated with new keyword
let secondStudent = new Student("Lucy", "Chinchilla",2);
console.log(firstStudent)
console.log(Student.enrollStudents()) // static method called using class name (capital letter)

// - to expand on class methods
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);

// finding the distance between p1 and p2 is better achieved using a class method, passing in instances
  console.log(Point.distance(p1, p2)); // 7.0710678118654755
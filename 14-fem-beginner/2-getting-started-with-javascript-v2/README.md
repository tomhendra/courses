<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Frontend Masters: Getting Started with JavaScript V2</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Course Overview](#11-course-overview)
  - [1.2. Code is for Humans](#12-code-is-for-humans)
- [2. Programming Primer](#2-programming-primer)
  - [2.1. Values](#21-values)
  - [2.2. Operations](#22-operations)
  - [2.3. Types](#23-types)
  - [2.4. Variables](#24-variables)
  - [2.5. Expressions & Statements](#25-expressions--statements)
  - [2.6. Decisions: If & Else](#26-decisions-if--else)
  - [2.7. Loops](#27-loops)
  - [2.8. Functions](#28-functions)

## 1. Introduction

An introduction to JavaScript with Kyle Simpson, of YDKJS.
[Course Link](https://frontendmasters.com/courses/getting-started-javascript-v2/).

### 1.1. Course Overview

Three pillars of JS:

1. Types / Coercion
2. Scope / Closures
3. This / Prototypes

### 1.2. Code is for Humans

- [Video link](https://frontendmasters.com/teachers/kyle-simpson/code-is-for-humans/).
- We write code so that it is readable to human beings.
- A systemic problem in software development is that developers don't understand why code works.
- Developers are professional guessers!
- If you don't know how your code works, you have no hope of fixing it when it breaks (Getify's Law #42).
- Ego often drives devs to say "it'd be faster if I just rewrote it".
- The inability to understand code to the extent you have to rewrite it is a universal, systemic problem.
- The difficulty of understanding code comes directly from out inability and unwillingness to insist that the code communicates our ideas.
- Problem: We write code primarily for the computer, but that's not who source code is for.
- There are an infinite number of ways to write the same program, but what metric do we use to measure the 'best' way?
- The program is just a suggestion to the computer.
- Primary purpose: Code is for communicating ideas with other people.
- The best metric for code quality is effective communication of your ideas so that it survives the "it'd be faster if I just rewrote it" cycle.
- Make your code so understandable that another person can figure out what you were thinking and spot and correct a mistake causing a bug. This is rare!
- Code that you do not understand is code that you cannot trust, and code that you cannot trust is code that you do not understand.
- Why re we always optimizing for writability instead of readability?
- As much as 70% of our time spent coding is spent reading the code.
- Code must first be ready before it can be written.
- **Warning:** If your code has to be rewritten to be fixed, improved or extended, you failed.
- Dedicate 10% of your time (6 minutes in every hour) to refactor your code to be more readable.
- Documentation and tests are important, but ultimately they are **indirectly** related to code quality.
- Readability **directly** impacts your ability, and that of everyone else, to do their job.
- Every single moment you invest in making your code more readable is time saved in the future.
- The one thing we will always be better at than the computer: Empathetic communication with other people (Getify's Law #1).
- Understanding your tools is how you communicate your ideas more effectively through code.

## 2. Programming Primer

The blocks that make up our programs:

1. Values
2. Operations
3. Variables
4. Expressions and statements
5. Decisions
6. Loops
7. Functions

### 2.1. Values

- **Number**: In JavaScript there is no distinction between numbers that have decimals and ones that don't.
- **String**: a collection of characters that make up something that we could pronounce. A word or a sentence.
- **Boolean**: true / false. Must be one or the other.
- **Empty value**: null & undefined. Denotes there is no value, an emptiness.
- **Array**: An ordered set of values.
- **Object**: A set of values with named positions. The key AKA property is a named specific location. Strings are used for the keys.

### 2.2. Operations

- All basic arithmetic: `+`, `-`, `*` and `/`.
- `+` has dual purpose depending on the values; addition for numbers or concatenation for strings.
  - This is knows as 'overloaded' meaning it does more than one thing.
- Operators have operands. An operand is the value that is going to be operated on by the operator.
- e.g. `3 + 4` has operator of `+`, `3` is the left operand and `4` is the right operand.
- The kinds of operators that have a left and right operand are known as 'binary' operators.
- `!` is a 'unary' operator meaning there's a single operand involved. `!` does the 'flipping' or 'negation' or 'compliment' of a boolean value.
- `==` is a comparison operator: a binary operator that asks whether the right and left hand operands have a relationship that we can determine something about. Double equals is the loose equality operator.
- `<` and `>` comparison operators for less than or greater than, returning a boolean.
- Logical operators try to decide something for us:
  - The `||` is the OR logical operator: if one or the other results in true, return boolean true.
  - The `&&` is the AND logical operator: If both result in true, return boolean true.

### 2.3. Types

- The term in programming speak for a kind of value is a type.
- `typeof` is a unary operator which which returns the type of a value.
- `typeof null` returns `object` which is a 20 year old bug. We can't always fix bugs in languages becuase it may break other things.
- `typeof [1,2,3]` returns `object` which is a less specific answer than perhaps we'd like. Arrays are subtypes of the `object` type.

### 2.4. Variables

- A variable is a representation of a place in memory which is used to store values.
- e.g. `var name = "Tom"` - The variable `name` is assigned the string `"Tom"` with the assignment operator `=` which tells the computer to store it in a place in memory.
- Later if we want to retrieve the value, we use the variable `name` to give us the string back.
- The `;` denotes the end of a statement, like a `.` in english to finish a sentence.
- Array access is done with square brackets e.g. for `var friends = ["Pedro", "Alberto"]` we'd write `friends[1]` to access `"Alberto"`.
- There are operations that can only be done with variables, because not only do they do something but they reassign too.

  ```js
  var age = 39;
  age++; // increment what is in age by 1, and reassign the new value back to age.
  age += 2; // increment what is in age by 2, and reassign the new value back to age.

  age; // 42
  ```

### 2.5. Expressions & Statements

- An expression is like a phrase in english, whereas a statement is like a sentence.
- A statement will nearly always end with a `;`.
- `var age = 39;` is a statement, it ends with a `;` - a whole sentence.
- The `age = 39` part is an assignment; an expression - a phrase within the sentence.
- `age = 1 + (age * 2);` is a statement with more expressions than you might think.
  - `2` is an expression (a literal expression, using a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) value).
  - `age` is another expression, we need to retrieve the value of the variable.
  - `(age * 2)` is an another expression, we need to perform arithmetic.
  - `1` is another expression for the literal 1.
  - `1 + (age * 2)` is a fifth expression.
  - `ge = 1 + (age * 2)` is the sixth expression.

### 2.6. Decisions: If & Else

- To do something useful with our programs we need to make decisions.
- One of the primary ways to make a decision is with the `if` statement.

```js
var age = 39;

if (age >= 18) {
  goVote();
}
```

- The `()` is the "if clause" or "test clause".
- We group a set of statements together with `{}` - like a paragraph in english.
- The test clause is evaluated and if `true` the code within the `{}` is executed.
- A lot of the time we need to choose between two different things, for which we use the `if else` statement.

```js
if (isEnrolled()) {
  takeClass(); // if the test clause evaluates to true, execute this code.
} else {
  enrolFirst(); // if the test clause evaluates to false, execute this code.
}
```

- The "else clause" only executes if the test clause evaluates to `false`.
- These statements can be chained and nested to create more complex structures to build your application.

### 2.7. Loops

- It is often the case that you will need to perform several operations multiple times.
- Loops are the way that we repeat something over and over again.
- Two different ways of doing repetition with a `for` loop.

```js
var students = ['Matt', 'Sarah', 'Kenny'];

// I'm going to do something and count the number of times I am going to do it.
// Test clause identical to if statement.
for (let i = 0; i < students.length; i++) {
  greetStudent(students[i]); // Executed each time the test clause passes.
}

// A for loop that goes over a list of values.
// Called an "iterator" where all values are iterated over.
for (let student of students) {
  greetStudent(student);
}
```

- A while loop keeps iterating while the clause evaluates to true.

```js
while (students.length > 0) {
  let student = students.pop();
  greetStudent(student);
}
```

### 2.8. Functions

- There are times when we have a collection of statements that we want to execute multiple times in different places.
- Technically the computer science term for a function is a **procedure**: a collection of things that we want to do.

```js
function greetStudent(student) {
  console.log(`Hello, ${student.name}!`);
}
```

- `student` is the **parameter**, the input.
- Back ticks ` `` ` in JS are used for **interpolated strings** - a string where we are putting other variable values inside.
- The example is doing something but not giving us anything back, which is why it is a **procedure**.
- The following example is more true to the spirit of a **function** in that it takes an input and computes an output.

```js
function timeRemaining(timeElapsed, endTime) {
  return endTime - timeElapsed;
}

var left = timeRemaining(42, 240);

left; // 198
```

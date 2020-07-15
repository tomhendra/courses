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

## 1. Introduction

An introduction to JavaScript with Kyle Simpson, of YDKJS.
[Course Link](https://frontendmasters.com/courses/getting-started-javascript-v2/).

### 1.1. Course Overview

- Programming primer (in JS)
- Three pillars of JS:

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
- Dedicate 10% if your time (6 minutes in every hour) to refactor your code to be more readable.
- Documentation and tests are important, but ultimately they are **indirectly** related to code quality.
- Readability **directly** impacts your ability, and that of everyone else, to do their job.
- Every single moment you invest in making your code more readable is time saved in the future.
- The one thing we will always be better at than the computer: Empathetic communication with other people (Getify's Law #1).
- Understanding your tools is how you communicate your ideas more effectively through code.

## 2. Programming Primer

- The blocks that make up our programs:

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
- **Boolean**: true / false. Must be one or the other. s
- **Empty values**: null & undefined. Denotes there is no value, an emptiness.
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

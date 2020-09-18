<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Functional-Light JavaScript, v3</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Why Functional Programming?](#11-why-functional-programming)
  - [1.2. Functional Programming Journey](#12-functional-programming-journey)
  - [1.3. Code is Provable](#13-code-is-provable)
  - [1.4. Course Overview](#14-course-overview)
- [2. Function Purity](#2-function-purity)

## 1. Introduction

Learn to apply functional programming concepts in JavaScript to make your programs more readable and less error-prone! Kyle Simpson will walk you through the core concepts of functional programming like function purity, point-free style, partial-application, currying, composition, immutability, recursion, and list operations like map/reduce/filter. You'll go even deeper with monads and transduction, two more techniques to add to your tool belt!

- [Slides](http://static.frontendmasters.com/resources/2019-05-06-functional-light-v3/functional-light-v3.pdf)

- We have to restructure our brains to think about and solve problems in a different way.
- There is [a book](https://www.amazon.es/Functional-Light-JavaScript-Balanced-Pragmatic-FP/dp/1981672346/ref=sr_1_1?__mk_es_ES=ÅMÅŽÕÑ&dchild=1&keywords=Functional-Light+JavaScript&qid=1600366916&sr=8-1) to accompany the course.
- The title says "light" but this is not a course for beginners.
- Light refers to not trying to inundate us with terminology & mathematical notation.
- It is deep, heavy, challenging stuff!

### 1.1. Why Functional Programming?

- One of the biggest reasons is that it signals a paradigm shift in the way that we approach code.
- That can be incorporated in the idea of imperative vs declarative programming.
- **Imperative** means code that is focused primarily on how to do something.
- The problem with imperative code is that the future reader needs to read all of the code and execute it mentally to understand it.
- The computer is great at executing code, but our brains are not built for that.
- Having to mentally execute code makes it harder to understand, and harder to maintain as a result.
- **Declarative** means code that is focused primarily on what (the outcome) and more importantly the why.
- Many people say good code should be self-documenting, and code comments shouldn't be required: nonsense!
- Code doesn't need to self-document, it needs to tell a story, and code comments can help with this.
- Comments should not duplicate the narrative of what we are doing.
- Comments should say **why** we are doing something, not the what.
- If it is particularly confusing, the **how** could be commented, but that's usually a sign we can improve the code.
- But if your code makes the _why_ obvious, then we don't need code comments at all.

### 1.2. Functional Programming Journey

- Most people give up on learning FP after their code readability decreases when using FP techniques.
- Everyone goes through this stage. Do not give up!
- It is complicated and hard and takes a long time to get comfortable with FP.
- Rather than looking at the theory and applying it top down, we should look at what we already know and make it more functional one piece at a time.
- There is a tension in that FP techniques are more confusing than the imperative approach, because it is not yet familiar.
- It is tempting to fall back to imperative techniques as we are under pressure to ship code. Keep pushing through!

### 1.3. Code is Provable

- FP looks very programmatic, but is actually mathematical.
- But it is not necessary to know the maths.
- We can take advantage of a mathematical principle, even if we can't prove it to ourselves.
- The basic arithmetic `1 + 1 = 2` has a formal proof to it which is amazingly complex.
- But we have all used and trusted this basic formula without going through the formal proof.
- Many functional programmers love to go through the formal proof, but it is not necessary.
- If we know that using a particular FP technique gives us a particular result, it is the same as using `1 + 1 = 2`.
- Most of the time our bugs are logic bugs, caused by not fully understanding what's happening in the code.
- We fumble our way through things until the tests pass, without true understanding.
- What would happen if almost every time we went to run a test we were 100% certain of the outcome?
- We would begin to develop a sense of confidence.
- We would become more effective programmers.
- A compelling thing about FP is the promise that we can use principles of programming that are based on real hard mathematics.
- And even if we don't understand the math, we can trust the mathematicians.
- If we use the principles correctly we are guaranteed of the outcome.
- FP techniques are about using mathematical principles in a mathematically sound way, that just happen to look like programming and let us solve programming problems.
- The best code is the code that doesn't have to be read.
- We could have a codebase of 900 lines of code that is based on proven mathematical principles that we never have to second guess, and just 100 lines of business logic code that we spent all day thinking about.
- We can have a more effective codebase, which is easier to manage, easier to find and fix bugs, if we reduce the surface area of what we need to focus on.

### 1.4. Course Overview

- Functions
- Closure
- Composition
- Immutability
- Recursion
- Lists / Data Structures
- Async
- FP Libraries

## 2. Function Purity

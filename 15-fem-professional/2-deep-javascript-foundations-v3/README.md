<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Deep JavaScript Foundations v3</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Motivations](#11-motivations)
  - [1.2. Course Overview](#12-course-overview)

## 1. Introduction

Dive into the core pillars of the JavaScript language with Kyle Simpson, author of the popular, You Don't Know JS, book series. You'll learn JavaScript's types, how to convert between them, and compare them with == and ===. You'll also learn lexical scope and closure. As well as the objects oriented system (this, prototypes and classes).

- [Slides](https://static.frontendmasters.com/resources/2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf)

### 1.1. Motivations

**Why dive into JavaScript so much more deeply?**

- We as developers tend to assume mental models about code, and when bugs happen we blame the language.
- JS clearly must have been designed poorly because this happened.
- It is not OK to blame JS for something happening that we are surprised by.
- Many people think that because of JavaScript's low barrier to entry that if something isn't immediately intuitive then it was poorly designed.
- We have a responsibility to learn how our tool works.
- Have you even read the [JavaScript specification](https://www.ecma-international.org/ecma-262/11.0/)?
- If you don't understand something, the JS spec is the source of authority.
- If something is weird or mysterious or blackbox or buggy there are two questions you should ask:

1. What does the specification say should happen?
2. Does the behaviour that I am seeing match the spec?

- If they don't match, you have a bug.
- If they do match, you aren't thinking about what's happening correctly.

- Most of the spec is written in this sort of numbered algorithmic format.

**12.4.4.1 Runtime Semantics: Evaluation**
_UpdateExpression : LeftHandSideExpression++_

1. Let _lhs_ be the result of evaluating _LeftHandSideExpression_.
2. Let _oldValue_ be ? ToNumeric(? GetValue(_lhs_)).
3. Let _newValue_ be ! Type(_oldvalue_)::add(_oldValue_, Type(_oldValue_)::unit).
4. Perform ? PutValue(_lhs_, _newValue_).
5. Return _oldValue_.

- Even though some parts of reading the spec can be challenging, there is a very straightforward algorithm for determining what to do.
- If we to know what something is doing, predict it and avoid problems, the only way to do that is to understand what it's going to do: how its algorithm works.
- One of the biggest blocks to a developer's effectiveness is that we code without really understanding what's happening under the hood.

- You can always check MDN but MDN is not always right!
- You need to be comfortable enough go to the spec for as the real source of authority.

**Whenever there's a divergence between what your brain thinks is happening, and what the computer does, that's where bugs enter the code.** _--getify's law #17_

### 1.2. Course Overview

- JavaScript can be divided into 3 pillars.
- No matter what framework you are using, these three pillars are fundamental.

**1. Types**

- Primitive Types
- Abstract Operations - Coercion
- Equality
- TypeScript, Flow, etc.

**2. Scope**

- Nested Scope
- Hoisting
- Closure
- Modules

**3. Objects (Oriented)**

- `this`
- `class { }`
- Prototypes
- OO vs. OLOO

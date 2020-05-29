document.getElementById('section').append('Data structures: Stacks & Queues.');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Building our own stack -- linked list
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.top) return this.top.value;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const temp = this.top;
    this.top = this.top.next;
    this.length--;
    // return temp.value;
    return this;
  }
}

// Building our own stack -- array
class StackArr {
  constructor() {
    this.array = [];
  }
  peek() {
    if (this.array.length) {
      return this.array[this.array.length - 1];
    } else {
      console.error('No data in stack.');
    }
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new StackArr();
myStack.push('Google');
myStack.push('Amazon');
myStack.push('Apple');
myStack.push('FaceBook');
myStack.pop();
console.log(myStack.peek());
console.log(myStack);

// Building our own queue -- linked list
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (this.first) return this.first.value;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // whatever was last in line points to new node
      this.last = newNode; // the new last in line is the new node
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next; // the new first in line is whatever was next in line
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.enqueue('Samir');
myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);

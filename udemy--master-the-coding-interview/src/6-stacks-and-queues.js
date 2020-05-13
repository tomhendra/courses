document.getElementById('section').append('Data structures: Stacks & Queues.');

// Building our own stack -- linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

const myStack = new Stack();
myStack.push('Google');
myStack.push('Amazon');
myStack.push('Apple');
myStack.push('FaceBook');
myStack.pop();
console.log(myStack.peek());
console.log(myStack);

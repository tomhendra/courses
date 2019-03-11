// - both stacks & queues are both abstract data structures
// =======
// STACKS
// =======
// - stacks need to abide by a LIFO principle
// - LIFO: Last In First Out -- the last element added to the stack will be the first element removed from the stack
// - where are stacks used? 
//     - managing function invocations
//     - undo / redo
//     - routing (the history object)
//
// - there is more than one way of implementing a stack

// singly linked list implementation -- adds and removes from the beginning to ensure constant time of O(1)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- push
// - the function should accept a value
// - create a new node using the value passed to the function
// - if the is no head property on the list, set the first and last properties to be the newly created node
// - if there is at least one node, create a variable that stores the current first property on the stack
// - reset the first property to be the newly created node
// - set the next property on the node to be the previously created variable
// - increment the size of the stack by 1
// - return the size
// ----------------------------------------------------------------------------------------------------------
    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- pop
// - if there are no nodes in the stack, return null
// - create a temporary variable to store the first property on the stack
// - if there is only 1 node, set the first and last property to be null
// - f there is more than one node, set the first property to be the next property on the current first
// - decrement size by 1
// - return value of removed node
// ----------------------------------------------------------------------------------------------------------
    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
var stack = new Stack
stack.push('hello')
stack.push('goodbye')
stack.push('!!')
stack.push(':)')
stack.push('<3')
stack.pop()
console.log(stack)

// ---------------------------------------------------------------------------------
//             | insertion      | removal        | searching      | access         |
// ---------------------------------------------------------------------------------
// stacks      |      O(1)      |      O(1)      |      O(n)      |      O(n)      |
// ---------------------------------------------------------------------------------

// - stacks are a LIFO data structure where the last value in is always the first one out
// - stacks are used to handle function invocations (the call stack), or operations like undo / redo, and for routing (remember pages you have visited and go back/forward) plus much more!
// - they are not a built in data structure in JavaScript but are relatively simple to implement

// =======
// QUEUES
// =======
// - data structure used to enqueue & dequeue data
// - queues need to abide by a FIFO principle
// - FIFO: First In First Out -- the first element added to the stack will be the first element removed from the queue
// - where are queues used? 
//     - background tasks
//     - uploading resources
//     - printing / task processing
// - using arrays means having to combine unshift and pop or push and unshift, i.e. re-indexing, so using a custom class is best if performance is a concern

// singly linked list implementation -- adds to the end and removes from the beginning to ensure constant time of O(1)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- enqueue 
// - this function accepts some value
// - create a new node using that value passed to the function
// - if there are no nodes in the queue, set this node to be the first and last property of the queue
// - otherwise, set the next property on the current last to be that node, and then set the last property of 
//   the queue to be that node
// - increment the size of the queue by 1
// ----------------------------------------------------------------------------------------------------------
    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- dequeue 
// - if there is no first property, just return null
// - store the first property in a variable
// - see if the first is the same as the last (check if there is only 1 node). If so, set the first and last 
//   to be null
// - if there is more than 1 node, set the first property to be the next property of first 
// - decrement the size by 1
// - return the value of the node dequeued
// ----------------------------------------------------------------------------------------------------------
    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
var queue = new Queue()
queue.enqueue('hello')
queue.enqueue('goodbye')
queue.enqueue('!!')
queue.enqueue(':)')
queue.enqueue('<3')
queue.dequeue()
console.log(queue)

// ---------------------------------------------------------------------------------
//             | insertion      | removal        | searching      | access         |
// ---------------------------------------------------------------------------------
// queues      |      O(1)      |      O(1)      |      O(n)      |      O(n)      |
// ---------------------------------------------------------------------------------

// - queues are a FIFO data structure, all elements are first in first out
// - queues are useful for processing tasks and are foundational for more complex data structures
// - insertion and Removal can be done in O(1)
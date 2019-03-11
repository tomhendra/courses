// - both stacks & queues are both abstract data structures
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
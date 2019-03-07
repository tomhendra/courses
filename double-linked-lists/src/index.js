// - double linked lists are almost identical to singly linked lists, except every node has another pointer, to the previous node
// - more memory === more flexibility! -- it's almost always a tradeoff

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- push
// - the function should accept a value
// - create a new node using the value passed to the function
// - if the is no head property on the list, set the head and tail to be the newly created node
// - otherwise set the next property on the tail to be the new node
// - set the previous property on the newly created node to be the old tail
// - set the tail to be the newly created node
// - increment the length by 1
// - return the linked list
// ----------------------------------------------------------------------------------------------------------
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}
let list = new DoublyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('!!')
list.push(':)')
list.push('<3')
console.log(list)
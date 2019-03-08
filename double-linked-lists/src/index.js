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
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- pop
// - if there are no nodes on the list, return undefined
// - store the current tail in a variable to return later
// - if the length is 1, set the head and tail to be null
// - update the tail to be the previous node
// - set the newTail's next to null
// - set the oldTail's prev to null
// - decrement the length of the list by 1
// - return the value removed
// ----------------------------------------------------------------------------------------------------------
    pop() {
        if (!this.head) return undefined;
        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- shift
// - if there are no nodes on the list, return undefined
// - store the current head property in a variable oldHead
// - if the length is 1, set the head and tail to be null
// - update the head to be the next of the oldHead
// - set the head's prev property to null
// - set the oldHead's next to null
// - decrement the length by 1
// - return the value of the node removed
// ----------------------------------------------------------------------------------------------------------
    shift() {
        if (!this.head) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- unshift
// - this function should accept a value
// - create a new node using the value passed to the function
// - if there is no head property on the list, set the head and tail to be the newly created node
// - otherwise...
//     - set the prev property on the head of the list to be the new node
//     - set the next property on the new node to be the head property
//     - update the head to be the new node
// - increment the length of the list by 1
// - return the linked list
// ----------------------------------------------------------------------------------------------------------
    unshift(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- get
// - this function should accept an index
// - if the index is less than zero or greater than or equal to the length of the list, return null
// - if the index is less than or equal to half the length of the list...
//     - loop through the list starting from the head and loop towards the middle
//     - return the node once it is found
// - if the index is greater than half the length of the list...
//     - loop through the list starting from the tail and loop towards the middle
//     - return the node once it is found
// ----------------------------------------------------------------------------------------------------------
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter, current;
        if (index <= this.length / 2) {
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            counter = this.length -1;
            current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- set
// - this function should accept an index and a value
// - create a variable which is the result of the get method at the index passed to the function
//     - if the get method returns a valid node, set the value of that node to be the value passed to the 
//       function
//     - return true
// - otherwise return false
// ----------------------------------------------------------------------------------------------------------
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        } else {
            return false;
        }
    }
}
let list = new DoublyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('!!')
list.push(':)')
list.push('<3')
list.set(3, '(00)')
console.log(list)
console.log(list.get(3))
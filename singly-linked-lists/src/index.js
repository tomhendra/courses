// =============
// LINKED LISTS
// =============
// - Data structure that contains a head, tail and length property
// - Linked lists consist of nodes, and each node has a value and a pointer to another node or null
// - each node is connected one way directionally to the next node (apart from the last node which points to null)
// - comparisons with arrays:
//
//     - lists...
//     - do not have indexes
//     - connected via nodes with a next pointer
//     - random access is not allowed
//
//     - arrays...
//     - indexed in order
//     - insertion and deletion can be expensive
//     - can quickly be accessed at a specific index

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- push
// - the function should accept a value
// - create a new node using the value passed to the function
// - if there is no head property on the list, set the head and tail to be the newly created node
// - otherwise set the next property on the tail to be the new node and set the tail property on the list to 
//   be the newly created node
// - increment the length by 1
// - return the linked list
// ----------------------------------------------------------------------------------------------------------
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- pop
// - if there are no nodes on the list, return undefined
// - loop through the entire list until you reach the tail
// - set the property of the 2nd to last node to be null
// - set the tail to be the 2nd to last node
// - decrement the length of the list by 1
// - return the value of the node removed
// ----------------------------------------------------------------------------------------------------------
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- shift
// - if there are no nodes on the list, return undefined
// - store the current head property in a variable
// - set the head property to be the current head's next property
// - decrement the length by 1
// - return the value of the node removed
// ----------------------------------------------------------------------------------------------------------
    shift() {
        if (!this.head) return undefined;
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- unshift
// - this function should accept a value
// - create a new node using the value passed to the function
// - if there is no head property on the list, set the head and tail to be the newly created node
// - otherwise set the newly created node's next property to be the current head property on the list
// - set the head property on the list to be that newly created node
// - increment the length of the list by 1
// - return the linked list
// ----------------------------------------------------------------------------------------------------------
    unshift(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
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
// - loop through the list until you reach the index and return the node at that specific index
// ----------------------------------------------------------------------------------------------------------
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- set
// - this function should accept an index and a value
// - use the get method to find the specific node
// - if the node is not found return false
// - if the node is found, set the value of that node to be the value passed to the function and return true
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
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- insert
// - this function should accept an index and a value
// - if the index is less than zero or greater than the length, return false
// - if the index is the same as the length, push a new node to the end of the list
// - if the index is 0, unshift a new node to the start of the list
// - otherwise, using the get method, access the node at the index -1
// - set the next property on that node to be the new node
// - set the next property on the new node to be the previous next
// - increment the length
// ----------------------------------------------------------------------------------------------------------
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val); // !! "bang bang" double negation operator coerces to boolean...interesting! 
        if (index === 0) return !!this.unshift(val);

        var newNode = new Node(val)
        var preNode = this.get(index - 1);
        var temp = preNode.next;
        preNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- remove
// - this function should accept an index
// - if the index is less than zero or greater than or equal to the length, return undefined
// - if the index is the same as the length -1, pop
// - if the index is 0, shift
// - otherwise, using the get method, access the node at the index -1
// - set the next property on that node to be the next of the next node
// - decrement the length
// - return the value of the node removed
// ----------------------------------------------------------------------------------------------------------
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length -1) return !!this.pop();
        if (index === 0) return !!this.shift();
        var preNode = this.get(index -1);
        var removed = preNode.next;
        preNode.next = removed.next;
        this.length--;
        return removed;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- reverse
// - swap the head and the tail
// - create a variable called next
// - create a variable called prev
// - create a variable called node/current and initialize it to the head property
// - loop through the list
// - set next to be the next property on whatever node/current is
// - set the next property on the node/current to whatever prev is
// - set prev to be the value of the node/current variable
// - set the node/current variable to be the value of the next variable
// - return the list
// ----------------------------------------------------------------------------------------------------------
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next = null;
        var prev = null;

        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
let list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('!!')
list.push(':)')
list.push('<3')
list.reverse()
console.log(list)
console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))
console.log(list.get(3))
console.log(list.get(4))

// -----------------------------------------------------------------------------------------
//                     | insertion      | removal        | searching      | access         |
// -----------------------------------------------------------------------------------------
// singly linked lists |      O(1)      |  O(1) OR O(n)  |      O(n)      |      O(n)      |
// -----------------------------------------------------------------------------------------

// - singly linked lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
// - arrays contain a built in index whereas linked lists do not
// - the idea of a list data structure that consists of nodes is the foundation for other data structures like stacks and queues
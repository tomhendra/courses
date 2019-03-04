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
}
let list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('!!')
list.push('hello again')
list.pop()
list.shift()
console.log(list)
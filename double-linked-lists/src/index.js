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
}
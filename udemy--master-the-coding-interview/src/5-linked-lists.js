document.getElementById('section').append('Data Structures: Linked Lists.');

const basket = ['apples', 'grapes', 'pears'];

/*
linked list: apples --> grapes --> pears

apples
8947 --> grapes
          8742 --> pears
                    372 --> null
*/

// Building our own linked list

/*
myLinkedList = {
  head: {
    value: 10
    next: {
      value: 5
      next: {
        value: 16
        next: null
      }
    }
  }
};
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.append(val);
    if (index === 0) return !!this.prepend(val);

    const newNode = new Node(val);
    let preNode = this.traverseToIndex(index - 1);
    let temp = preNode.next;
    preNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    // check params
    const preNode = this.traverseToIndex(index - 1);
    const removedNode = preNode.next;
    preNode.next = removedNode.next;
    this.length--;
    return true;
  }

  traverseToIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 20);
myLinkedList.remove(2);
console.log(myLinkedList.printList());

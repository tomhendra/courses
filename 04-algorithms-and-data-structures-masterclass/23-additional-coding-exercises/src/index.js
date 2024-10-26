// ============================================
// ADDITIONAL CODING EXERCISED - THE WILD WEST
// ============================================

// ----------------------------------------------------------------------------------------------------------
// coding exercises 35 - 38 are repeats of methods covered in SLL section
// ----------------------------------------------------------------------------------------------------------
// coding exercise 39 --- SLL rotate
// this function should rotate all nodes in the list by some number passed in. e.g. if the list is
// 1 > 2 > 3 > 4 > 5 and you rotate by 2, the list should be modified to 3 > 4 > 5 > 1 > 2. the number passed
// in can be any integer.
// time complexity: O(n) where n is the list
// space complexity O(1)
// ----------------------------------------------------------------------------------------------------------
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
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  rotate(val) {
    var node;
    if (val > this.length || val === 0) return this;
    // adding this.length to val allows for negative numbers, as you can only iterate one way
    // the following values of val arrive at the same result (as good old pen and paper showed!)
    // 1 and -4
    // 2 and -3
    // 3 and -2
    // 4 and -1
    if (val < 0) val = val + this.length;
    for (let i = 0; i < val; i++) {
      node = this.head;
      this.head = this.head.next;
      this.tail.next = node;
      this.tail = node;
      this.tail.next = null;
    }
    return this;
  }
}
// const list = new SinglyLinkedList
// list.push(1).push(2).push(3).push(4).push(5)
// list.rotate(-2)
// console.log(list)

// ----------------------------------------------------------------------------------------------------------
// coding exercise 40 is a repeat of the set method covered in SLL section
// ----------------------------------------------------------------------------------------------------------
// coding exercise 41 --- divide & conquer - countZeroes
// given an array of s and 0s which has all 1s followed by all 0s, write a function that returns all 0s in
// the array.
// time complexity: O(log n)
// ----------------------------------------------------------------------------------------------------------
function countZeroes(array) {
  let min = 0;
  let max = array.length - 1;
  let zeroes = 0;

  while (min <= max) {
    if (array[min] === 1) min++;
    if (array[max] === 0) {
      zeroes++;
      max--;
    }
  }
  return zeroes;
}
// console.log(countZeroes([1,1,1,1,0,0])) // 2
// console.log(countZeroes([1,0,0,0,0])) // 4
// console.log(countZeroes([0,0,0])) // 3
// console.log(countZeroes([1,1,1,1])) // 0

// ----------------------------------------------------------------------------------------------------------
// coding exercise 42 --- divide & conquer - sortedFrequency
// given a sorted array and a number, write a function which counts the occurrences of number in the array
// ----------------------------------------------------------------------------------------------------------
function sortedFrequency(array, num) {
  let result = 0;
  const getFrequency = (arr) => {
    if (arr.length > 1) {
      let middle = Math.floor(arr.length / 2);
      return (
        getFrequency(arr.slice(0, middle)) + getFrequency(arr.slice(middle))
      );
    }
    if (arr.length === 1 && arr[0] === num) result++;
  };
  getFrequency(array);
  return !result ? -1 : result;
}
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1

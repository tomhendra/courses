// ======
// HEAPS
// ======
// - heaps are a type of tree
// - everything that applies to trees in general, applies to heaps
// - additional special considerations or rules
// - many different types of heaps

// =============
// BINARY HEAPS
// =============
// - very similar to a binary tree, but with some different rules
// - each node can at most only have two children
// - there is no order to the left or right, as with a binary search tree
// - in a max binary heap, the parent is greater than the children, but there are no guarantees between sibling nodes
// - in a min binary heap, the parent is less than than the children, but there are no guarantees between sibling nodes
// - a binary heap is as compact as possible. all the children of each node are as full as they can be nd left children are filled out first
// - no implied order between siblings - no relationship!
// - binary heaps are used to implement priority queues, which are very commonly used data structures
// - they are also used quite frequently for graph traversal
// - with just a little bit of maths, we can represent heaps using arrays!

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // ----------------------------------------------------------------------------------------------------------
  // challenge pseudocode -- insert
  // - push the value into the values property on the heap
  // - bubble up:
  //     - create a variable called index which is the length of the values property -1
  //     - create a variable called parentIndex which is the floor of (index-1)/2
  //     - keep looping as long as the values element at the parentIndex is less than the values element at the
  //       child index
  //          - swap the value of the values element at the parentIndex with the value of the element at the
  //            child index
  //          - set the index to be the parentIndex, and start again!
  // ----------------------------------------------------------------------------------------------------------
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.values[parentIndex];
      if (element <= parentElement) break;
      this.values[parentIndex] = element;
      this.values[index] = parentElement;
      index = parentIndex;
    }
  }
  // ----------------------------------------------------------------------------------------------------------
  //   challenge pseudocode -- remove (AKA extractMax)
  //   - swap the first value in the values property with the last one
  //   - pop from the values property, so you can return the value at the end
  //   - have the new root "sink down" to the correct spot:
  //       - the parent index starts at 0 (the root)
  //       - find the index of the left child: 2*index + 1 (make sure its not out of bounds)
  //       - find the index of the right child: 2*index + 2 (make sure its not out of bounds)
  //       - if the left or right child is greater than the element, swap. if both left and right are larger,
  //         swap with the largest child
  //       - the child index you swapped to now becomes the new parent index
  //       - keep looping and swapping until neither child is larger than the element
  //       - return the old root
  // ----------------------------------------------------------------------------------------------------------
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax();
console.log(heap);

// ===============
// PRIORITY QUEUE
// ===============
// - data structure where each element has a priority
// - elements with higher priorities are served before elements with lower priorities
// - value doesn't matter - the heap is constructed using priority

// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- priority queue
// - write a MIN binary heap - lower number means higher priority
// - each Node has a val and a priority.  Use the priority to build the heap
// - enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off
//   of its priority
// - dequeue method removes root element, returns it, and rearranges heap using priority
// ----------------------------------------------------------------------------------------------------------

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.values[parentIndex];
      if (element.priority >= parentElement.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parentElement;
      index = parentIndex;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let admissions = new PriorityQueue();
admissions.enqueue("missing limb", 1);
admissions.enqueue("swallowed golf ball", 2);
admissions.enqueue("broken fingernail", 50);
admissions.enqueue("paper cut", 30);
admissions.enqueue("hamster glued to foot", 5);
admissions.enqueue("finger stuck up nose", 10);
admissions.dequeue();
console.log(admissions);

// --------------------------------------------------------------------
//                   | insertion      | deletion      | search        |
// --------------------------------------------------------------------
// binary heaps      |    O(log n)    |    O(log n)   |     O(n)      |
// --------------------------------------------------------------------

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
// - a binary heap is as compact as possible. all the children of each node are as full as they can be nd left children are filled out first
// - no implied order between siblings - no relationship!
// - binary heaps are used to implement priority queues, which are very commonly used data structures
// - they are also used quite frequently for graph traversal

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
        let index = this.values.length -1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentElement = this.values[parentIndex];
            if (element <= parentElement) break;
            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex;
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
console.log(heap);
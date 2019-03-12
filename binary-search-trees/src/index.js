// ======
// TREES
// ======
// - what is a tree? -- a data structure that consists of nodes in a parent / child relationship
// - trees are nonlinear, lists are linear
// - there are many types of trees!
//
// - terminology
//     - root -- the top node in a tree
//     - child -- a node connected directly to another node when moving away from the root
//     - parent -- the converse notion of a child
//     - siblings -- a group of nodes that have the same parent
//     - leaf -- a node with no children
//     - edge -- the connection between one node and another
//
// - where are trees used? 
//     - HTML DOM
//     - network routing
//     - abstract syntax trees
//     - artificial intelligence
//     - folders in operating system
//     - computer file systems
//     - JSON
//
// =============
// BINARY TREES
// =============
// - each node can at most only have two children
// - there are many types of binary trees!
// - lots of different applications as well!
//     - decision trees (true / false)
//     - database indices
//     - sorting algorithms
//
// ====================
// BINARY SEARCH TREES
// ====================
// - special case of a binary tree
// - works with sorted or sortable data
// - every parent node has at most two children
// - every node to the left of a parent node is always less than the parent
// - every node to the right of a parent node is always greater than the parent

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

var tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
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
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- insert
// - create a new node
// - starting at the root
//     - check if there is a root, if not - the root now becomes that new node
//     - if there is a root, check if the value of the new node is greater than or less than the root value
//     - if it is greater
//          - check if there is a node to the right
//               - if there is, move to that node and repeat these steps
//               - if there is not, add that node as the right property
//     - if it is less
//          - check if there is a node to the left
//               - if there is, move to that node and repeat these steps
//               - if there is not, add that node as the left property
// - return tree
// ----------------------------------------------------------------------------------------------------------
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}

var tree = new BinarySearchTree()
tree.insert(50)
tree.insert(40)
tree.insert(30)
tree.insert(45)
tree.insert(25)
tree.insert(65)
tree.insert(78)
tree.insert(99)
console.log(tree)
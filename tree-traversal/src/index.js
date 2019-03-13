// ===============
// TREE TRAVERSAL
// ===============
// - two main ways to traverse a tree
//     - breadth-first search (across the tree)
//     - depth-first search (down the tree)
//
// - can be broken down into 3 steps (for BST):
//     - visit the node
//     - explore entire left side
//     - explore entire right side

// ----------------------------------------------------------------------------------------------------------
// the following code is copied from the binary search trees section, to provide a BST to work with
// ----------------------------------------------------------------------------------------------------------
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

    find(value) {
        if (this.root === null) return false;
        var current = this.root;
        var found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- BFS
// - create a queue (this can be an array) and a variable to store the values of nodes visited
// - place the root node in the queue
// - loop as long as there is anything in the queue
//     - dequeue a node from the queue and push the value of the node into the variable that stores the nodes
//     - if there is a left property on the node dequeued, add it to the queue
//     - if there is a right property on the node dequeued, add it to the queue
// - return the variable that stores the values
// ----------------------------------------------------------------------------------------------------------
    BFS() {
        var node = this.root,
            data = [],
            queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- DFS PreOrder -- traverses entire left side of root first, then the right side
// - create a variable to store the values of nodes visited
// - create a variable called current & store the root of the BST in it
// - write a helper function called traverse which accepts a node
//     - push the value of the node to the variable that stores the values
//     - if the node has a left property, call the helper function with the left property on the node
//     - if the node has a right property, call the helper function with the right property on the node
// - invoke the helper function with the current variable
// - return the variable that stores the values
// ----------------------------------------------------------------------------------------------------------
    DFSPreOrder() {
        var data = [],
            current = this.root;
        var traverse = (node) => {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- DFS PostOrder -- explores all children before visiting nodes, with root being last
// - create a variable to store the values of nodes visited
// - create a variable called current & store the root of the BST in it
// - write a helper function called traverse which accepts a node
//     - if the node has a left property, call the helper function with the left property on the node
//     - if the node has a right property, call the helper function with the right property on the node
//     - push the value of the node to the variable that stores the values
// - invoke the helper function with the current variable
// - return the variable that stores the values
// ----------------------------------------------------------------------------------------------------------
    DFSPostOrder() {
        var data = [],
            current = this.root;
        var traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
}
var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
var dfs = tree.DFSPostOrder()
console.log(tree)
console.log(dfs)
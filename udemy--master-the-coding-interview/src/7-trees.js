document.getElementById('section').append('Data structures: Trees');

// Building our own binary search tree
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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
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
  lookup(value) {
    if (this.root === null) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode.value;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(15);
tree.insert(10);
tree.insert(5);
tree.insert(11);
tree.insert(18);
tree.insert(16);
tree.insert(19);
tree.insert(30);
tree.insert(25);
tree.insert(24);
tree.insert(26);
tree.insert(35);
tree.insert(34);
tree.insert(36);

// VisualGo: 20,15,10,5,11,18,16,19,30,25,24,26,35,34,36

console.log(tree.lookup(17));
console.log(traverse(tree.root));

//               20
//       15              30
//   10      18      25      35
//  5  11  16  19  24  26  34  36

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// ```
// creating perfect binary tree's are ideal for efficiency. how we calc the number of nodes or levels we have on any given depth is
// level x = 2^x = number of nodes on current level
// # of nodes above a level = 2^x - 1
// ```;

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
      return (this.root = newNode);
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(1);
tree.insert(515);
tree.insert(5154);
tree.insert(53);
tree.insert(75);
tree.insert(3);
tree.insert(44);

console.log(tree.lookup(515));

// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

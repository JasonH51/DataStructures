class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  access(index) {
    if (index > this.length - 1) {
      throw new Error('Index does not exist!');
    }
    let node = this.first;
    let count = 0;
    while (count != index) {
      node = node.next;
      count++;
    }
    return node;
  }

  search(value) {
    let node = this.first;
    let count = 0;
    while (count != this.length - 1) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
      count++;
    }
    return false;
  }

  append(value) {
    const node = this.node(value);
    if (this.first == null) {
      this.firstNode(node);
      return node;
    }
    this.last.next = node;
    this.last = node;
    this.length++;
    return node;
  }

  prepend(value) {
    const node = this.node(value);
    if (this.first == null) {
      this.firstNode(node);
      return node;
    }
    node.next = this.first;
    this.first = node;
    this.length++;
    return node;
  }

  insert(index, value) {
    if (this.length - 1 < index) {
      return false;
    }
    const node = this.node(value);
    let prevNode = this.access(index - 1);
    node.next = prevNode.next;
    prevNode.next = node;
    return true;
  }

  delete(index) {
    let prevNode = this.access(index - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
    return prevNode;
  }

  node(value) {
    return new Node(value);
  }

  firstNode(node) {
    this.first = node;
    this.last = node;
    this.length++;
  }

  toString() {
    let node = this.first;
    for (let i = 0; i <= this.length; i++) {
      console.log(node);
      node = node.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.prepend(0);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insert(1, 544);
// linkedList.access(0);
// linkedList.access(1);
// linkedList.search(544);
linkedList.delete(1);

linkedList.toString();

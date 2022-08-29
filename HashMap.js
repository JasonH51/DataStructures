class LinkedList {
  constructor() {
    this.value = 1;
    this.next = null;
    this.length = 1;
  }

  genHash(input) {}
  reverseLinkedList() {
    for (let i = 0; i < this.length; i+3) {
      let f1 = this;
      let f2 = this.next;
      if (i === 0) {
        f1.next = null;
      }
      let temp;
      temp = f2.next;
      f2.next = f1;
      f1 = temp;
    }
  }
}

let linkedList = {
  value: 1,
  next: {//f1 - null
    value: 2,
    next: { //f2 - f1
      value: 3,
      next: {//temp - f1
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  },
  length: 5
};

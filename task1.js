class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  addLast(value) {
    let node = new Node(value);
    let currentNode;
    if (!this.head) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
  }

  addAt(value, index) {
    const i = Number.parseInt(index);
    this.checkIndex(i);

    if (i === 0) {
      this.addFirst(value);
      return;
    }

    const node = new Node(value);
    let currentNode, previousNode;
    currentNode = this.head;
    let count = 0;

    while (count < i) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    node.next = currentNode;
    previousNode.next = node;
    this.size++;
  }

  getAt(index) {
    const i = Number.parseInt(index);
    this.checkIndex(i);

    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === i) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
  }

  getByValue(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (
        currentNode.value.toString().toLowerCase().includes(value) &&
        value !== ''
      ) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  removeAt(index) {
    const i = Number.parseInt(index);
    this.checkIndex(i);

    let previousNode;
    let currentNode = this.head;
    let count = 0;

    if (i === 0) {
      this.removeFirst();
      return;
    } else {
      while (count < i) {
        count++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.size--;
  }

  removeFirst() {
    if (!this.head) {
      throw Error`List is empty`;
    }
    this.head = this.head.next;
    this.size--;
  }

  removetLast() {
    let currentNode;
    if (!this.head) {
      throw Error`List is empty`;
    } else {
      currentNode = this.head;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    }
    this.size--;
  }

  checkIndex(i) {
    if (i < 0 || i > this.size) {
      throw Error`Specified index is out of range`;
    } else if (!Number.isInteger(+i)) {
      throw Error`Specified index must be a number`;
    }
  }
}

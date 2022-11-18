class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  unshift(value) {
    const newNode = new LinkedListNode(value, this.head);

    if (!this.tail) {
      this.tail = newNode;
    }

    this.head = newNode;
    return this;
  }

  shift() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return this;
    }
    this.head = this.head.next;
    return this;
  }

  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return this;
    }
    let node = this.head;
    while (node.next) {
      !node.next.next ? (node.next = null) : (node = node.next);
    }
    this.tail = node;
    return this;
  }
}

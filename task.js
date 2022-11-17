class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  add(value) {
    this.length++;
    let newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    } 
    this.head = this.tail = newNode;
    return newNode;
  }

  remove() {
    if (this.tail) {
      this.length--;
      let tailNode = this.tail;
      let currentNode = this.head;

      while (currentNode.next !== tailNode) {
        currentNode = currentNode.next;
      }
      let beforeTail = currentNode;
      this.tail = beforeTail;
      this.tail.next = null;
      return tailNode;
    }
    return undefined;
  }

  addHead (value) {
    this.length++;
    let newNode = new Node(value);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }
    this.head = this.tail = newNode;
    return newNode;
  }

  removeHead() {
    if (this.head) {
      this.length--;
      let removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }
    return undefined;
  }

  addIndex(value, index) {
    if (index >= this.length) {
      throw Error('Incorrect index value');
    }
    if (index === 0) {
      return this.addHead(value);
    }
    let previousNode = null;
    let currentNode = this.head;
    
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    let newNode = new Node(value);
    newNode.next = currentNode;
    previousNode.next = newNode;
    this.length++;

    return newNode;
  }

  removeIndex(index) {
    if (index >= this.length) {
      throw Error('Incorrect index value');
    }
    if (index === 0) {
      return this.removeHead(index);
    }
    let previousNode = null;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
    this.length--;

    return currentNode;
  }

  print() {
    let current = this.head;
    
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

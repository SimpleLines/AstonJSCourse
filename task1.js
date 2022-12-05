class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addEndNode(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }

    this.length++;
  }

  addStartNode(value) {
    let current = this.head;
    let node = new Node(value);

    node.next = current;
    this.head = node;
    this.length++;
  }

  deleteEndNode() {
    let prev = null;
    let current = this.head;
    let second = this.head.next;

    while (second.next) {
      prev = current;
      current = second;
      second = second.next;
    }
    current.next = null;
    this.length--;
  }

  deleteStartNode() {
    if (!this.head) {
      throw new Error('Невозможно удалить узел из начала. Список пустой');
    }

    let second = this.head.next;
    this.head = second;
    this.length--;
  }

  addNode(position, value) {
    if (position < 0 || position > this.length) {
      throw new Error('Недостижимая позиция для вставки узла.');
    }

    let node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }

    this.length++;
  }

  delNode(position) {
    if (position < 0 || position > this.length) {
      throw new Error('Некорректное значение позиции. Невозможно удалить узел.');
    }

    if (position === 0) {
      this.deleteStartNode();
    } else if (position === this.length) {
      this.deleteEndNode();
    } else {
      let index = 0;
      let prev = null;
      let current = this.head;
      let second = this.head.next;

      while (index < position) {
        prev = current;
        current = second;
        second = second.next;
        index++;
      }

      prev.next = second;
      this.length--;
    }
  }
}

class Node {
  constructor(value) {
    if (typeof value === 'string') {
      this.value = value;
      this.next = null;
    } else {
      throw new Error(`Значение аргумента 'value' должно иметь тип 'string'.`);
    }
  }
}

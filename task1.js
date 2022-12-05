class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(data) {
		const node = new Node(data);
		if (this.tail) {
			this.tail.next = node;
		}
		if (!this.head) {
			this.head = node;
		}
		this.tail = node;
	}

	prepend(data) {
		const node = new Node(data, this.head);
		this.head = node;

		if (!!this.tail) {
			this.tail = node;
		}
	}

	find(data) {
		if (!this.head) return;
		let current = this.head;

		while (current) {
			if (current.data === data) {
				return current;
			}
			current = current.next;
		}
	}

	insertAfter(after, data) {
		const found = this.find(after);
		if (!found) return;
		found.next = new Node(data, found.next);
	}

	remove(data) {
		if (!this.head) return;
		let current = this.head;

		while (this.head && this.head.data === data) {
			this.head = this.head.next;
		}

		while (current.next) {
			if (current.next.data === data) {
				current.next = current.next.next;
			} else {
				current = current.next;
			}
		}

		if (this.tail.data === data) {
			this.tail = current;
		}
	}

	removeFirst() {
		this.head = this.head.next;
	}

	removeLast() {
		let current = this.head;
		while (current.next !== this.tail) {
			current = current.next;
		}
		current.next = null;
		this.tail = current;
	}
}

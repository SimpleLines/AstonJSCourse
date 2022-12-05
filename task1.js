class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    addToEnd(value){
        let node = new Node(value);
        if (this.length === 0) {
            this.head = node;
        }else{
            let current =  this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
        this.length++;
    }
    addToStart(value){
        let current = this.head;
        let node = new Node(value);   

        node.next = current;
        this.head = node;
        this.length++;
    }
    removeLast(){
        let prev = null;
        let current = this.head;
        let second = this.head.next;
        while (second) {
            prev = current;
            current = second;
            second = second.next;
        }
        current.next = null;
        this.length--;
    }
    removeFirst(){
        if(!this.head){
            throw new Error('Список пустой. Невозможно удалить узел из начала.');
        }
        let second = this.head.next;
        this.head = second;
        this.length--;
    }
    insertInPosition(position, value){
        if (position < 0 || position > this.length) {
            throw new Error('Некоректная позиция');
        }
        let node = new Node(value);
        
        if (position ===0 ) {
            node.next = this.head;
            this.head = node;
        }else{
            let current = this.head;
            let prev = nulll;
            let index = 0;
            
            while (index < position){
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = node;
            node.next = current;
        }
        this.length++;

    }
    removeAnyNode(position){
        if (position < 0 || position > this.length) {
            throw new Error('Некоректная позиция');
        }
        if (position === 0) {
            this.removeFirst();
        }else if (position === this.length){
            this.removeLast();
        }else{
            let index = 0;
            let prev = null;
            let current = this.head;
            let second = this.head.next;

            while (index < position){
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

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

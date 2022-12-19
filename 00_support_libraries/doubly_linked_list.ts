class DoublyLinkedListNode<T> {
  constructor(public data: T, 
    public next: DoublyLinkedListNode<T> | null = null, 
    public prev: DoublyLinkedListNode<T> | null = null) {}
}

class DoublyLinkedList<T> {
    private head: DoublyLinkedListNode<T> | null;
    private tail: DoublyLinkedListNode<T> | null;
    private _size: number = 0;

    constructor(){
        this.head = null;
        this.tail = null;
        this._size = 0;
    };

    public prepend(value: T): void {
        if(this.head === null && this.tail === null) {
            this.head = new DoublyLinkedListNode(value);
            this.tail = this.head;
            this._size = 1;
        }
        else {
            const newNode = new DoublyLinkedListNode(value, this.head);
            this.head!.prev = newNode;
            this.head = newNode;
            this._size++;
        }
    }

    public append(value: T): void {
        if(this.head === null && this.tail === null) {
            this.head = new DoublyLinkedListNode(value);
            this.tail = this.head;
            this._size = 1;
        }
        else {
            const newNode = new DoublyLinkedListNode(value, null, this.tail);
            this.tail!.next = newNode;
            this.tail = newNode;
            this._size++;
        }
    }

    public appendValues(values: T[]): void {
        values.forEach(value => this.append(value));
    }

    public get size() : number {
        return this._size;
    } 

    public getHead(): DoublyLinkedListNode<T> | null {
        return this.head;
    }

    public getTail(): DoublyLinkedListNode<T> | null {
        return this.tail;
    }

    public removeHeadAndGetValue(): T | null {
        if(this.head === null) {
            return null;
        }
        else {
            const value = this.head.data;
            this.head = this.head.next;
            if(this.head === null) {
                this.tail = null;
            }
            else {
                this.head.prev = null;
            }
            this._size--;
            return value;
        }
    }

    public removeTailAndGetValue(): T | null {
        if(this.tail === null) {
            return null;
        }
        else {
            const value = this.tail.data;
            this.tail = this.tail.prev;
            if(this.tail === null) {
                this.head = null;
            }
            else {
                this.tail.next = null;
            }
            this._size--;
            return value;
        }
    }

    public print(): void {
        let currentNode: DoublyLinkedListNode<T> | null = this.head;
        console.log(`Here is the list`);
        while (currentNode != null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }

        console.log(`Printing list is completed`);
    }
}


export default DoublyLinkedList;
import DoubleLinkedList from '../00_support_libraries/doubly_linked_list';

class MyQueue<T> {
    private doublyLinkedList: DoubleLinkedList<T>;

    constructor() {
        this.doublyLinkedList = new DoubleLinkedList();
    }

    public enqueue(value: T): void {
        this.doublyLinkedList.append(value);
    }

    public dequeue(): T | null {
        return this.doublyLinkedList.removeHeadAndGetValue();
    }

    public peek(): T | null {
        if(this.doublyLinkedList.size === 0) {
            return null;
        } else {
            return this.doublyLinkedList.getHead()!.data;
        }
    }

    public print(): void {
        this.doublyLinkedList.print();
    }
}

enum Color {
    White = 'white',
    Black = 'black',
    Red = 'red',
}

class CoOrdinate {
    x: number;
    y: number;
    status: Color = Color.White;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}

const queue = new MyQueue<CoOrdinate>();
queue.enqueue(new CoOrdinate(1, 2));
queue.print();
queue.enqueue(new CoOrdinate(3, 4));
queue.print();
queue.enqueue(new CoOrdinate(5, 6));
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();

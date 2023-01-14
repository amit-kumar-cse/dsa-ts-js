//let us create a doubly ended queue using LinkedList in one go, it will be most versatile.
import DoublyLinkedList from "./doubly_linked_list";

interface Queue<T> {
    enqueue(value: T): void;
    dequeue(): T | null;
    size: number;
    peek: T | null;
    isEmpty: boolean;

    buildFromIterable(arr: Iterable<T>): void;

    logQueueInfoOnConsole(): void;
}
class LinkedListQueue<T> implements Queue<T> {
    private doublyLinkedList: DoublyLinkedList<T>;

    constructor() {
        this.doublyLinkedList = new DoublyLinkedList<T>();
    }

    enqueue: (value: T) => void = (value) => {
        this.doublyLinkedList.append(value);
    }

    dequeue: () => T | null = () => {
        if (this.doublyLinkedList.size === 0) {
            return null;
        }
        const value = this.doublyLinkedList.removeHeadAndGetValue();
        return value;
    }

    get peek(): T | null {
        return this.doublyLinkedList.getHead()?.data ?? null;
    }

    get size(): number {
        return this.doublyLinkedList.size;
    }

    get isEmpty(): boolean {
        return this.doublyLinkedList.size === 0;
    }

    buildFromIterable: (itr: Iterable<T>) => void = (itr) => {
        this.doublyLinkedList.appendValues(itr);
    }

    logQueueInfoOnConsole: () => void = () => {
        console.log(`LinkedListQueue info start ------------------>`);
        console.log(`queue: ${this.doublyLinkedList.getValuesAsArray()}`);
        console.log(`size: ${this.size}`);
        console.log(`isEmpty: ${this.isEmpty}`);
        console.log(`peek: ${this.peek}`);
        console.log(`LinkedListQueue info end ------------------>`);
    }
}


// class CircularArrayQueue<T> implements Queue<T> {
//     private arr: T[];
//     /**
//      * front is the position of the element that will be dequeued next.
//      * @private
//      */
//     private front: number;
//     ///enqueue will be done at position rear.
//     /**
//      * rear is the position where the next element will be enqueued.
//      * next item will be removed from (this.front + 1)%this.arr.length;
//      * @private
//      */
//     private rear: number;
//     /**
//      * number of elements in the queue, not the size of the holding array.
//      * next item will be inserted at (this.rear + 1)%this.arr.length;
//      * @private
//      */
//     private _size: number;
//
//     constructor(initialCapacity: number = 100) {
//         this.arr = new Array<T>(initialCapacity);
//         this.front = 0;
//         this.rear = 0;
//         this._size = 0;
//     }
//
//     /**
//      * enqueue will be done at position rear, circularly.
//      * @param value
//      */
//     enqueue: (value: T) => void = (value) => {
//         console.log(`enqueueing ${value}`);
//         console.log(`this.front: ${this.front}, this.rear: ${this.rear}`);
//         if (this.front === (this.rear + 1)%this.arr.length ) {
//             this.doubleSize(true);
//         }
//         this.rear = (this.rear + 1)%this.arr.length;
//         this.arr[this.rear] = value;
//         this._size++;
//     }
//
//     dequeue: () => T | null = () => {
//         if (this.front === this.rear) {
//             return null;
//         }
//         this._size--;
//         this.front = (this.front + 1)%this.arr.length;
//         return this.arr[this.front];
//     }
//
//     get peek(): T | null {
//         if (this.front === this.rear) {
//             return null;
//         }
//         return this.arr[this.front + 1];
//     }
//
//     get size(): number {
//         return this._size;
//     }
//
//     get capacity(): number {
//         return this.arr.length;
//     }
//
//     get isEmpty(): boolean {
//         return this.front === this.rear;
//     }
//
//     private doubleSize(printDebugInfo: boolean = false): void {
//         if (printDebugInfo) {
//             console.log(`doubling size from ${this.arr.length} to ${this.arr.length * 2}`);
//             console.log(`queue before doubling size:`);
//             this.logQueueInfoOnConsole();
//         }
//
//         const oldSize = this.arr.length;
//         const temp = new Array<T>(2 * this.arr.length);
//         for (let newIndex = 0, oldIndex = this.front+1; newIndex < oldSize; newIndex++, oldIndex = (oldIndex + 1)%oldSize) {
//             temp[newIndex] = this.arr[oldIndex];
//         }
//         this.arr = temp;
//         this.front = -1;
//         this.rear = oldSize - 1;
//
//         if(printDebugInfo) {
//             console.log(`queue after doubling size:`);
//             this.logQueueInfoOnConsole();
//         }
//     }
//
//     public buildFromIterable: (itr: Iterable<T>) => void = (itr) => {
//         for (const value of itr) {
//             this.enqueue(value);
//         }
//     }
//
//     logQueueInfoOnConsole(): void {
//         console.log(`CircularArrayQueue info start ------------------>`);
//         console.log(`arr: ${this.arr}`);
//         console.log(`front: ${this.front}, rear: ${this.rear}`);
//         console.log(`size: ${this.size}, capacity: ${this.arr.length}`);
//         console.log(`isEmpty: ${this.isEmpty}`);
//         console.log(`CircularArrayQueue info end ------------------>`);
//     }
// }

export {
    Queue
    , LinkedListQueue
    // , CircularArrayQueue
};

//
const linkedListQueue = new LinkedListQueue<number>();
linkedListQueue.buildFromIterable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
linkedListQueue.logQueueInfoOnConsole();
console.log(linkedListQueue.dequeue());
linkedListQueue.logQueueInfoOnConsole();
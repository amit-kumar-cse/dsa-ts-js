class Heap<T> {
    private readonly _heap: T[];
    private readonly _comparator: (a: T, b: T) => boolean;
    constructor(comparator: (a: T, b: T) => boolean) {
        this._heap = [];
        this._comparator = comparator;
    }
    get size(): number {
        return this._heap.length;
    }
    get isEmpty(): boolean {
        return this.size === 0;
    }
    get peek(): T | null {
        if(this.isEmpty) {
            return null;
        } else {
            return this._heap[0];
        }
    }
    insert(value: T) {
        this._heap.push(value);
        this._siftUp();
    }

    insertValues(values: Iterable<T>) {
        for(const value of values) {
            this.insert(value);
        }
    }

    remove(): T | null {
        if(this.isEmpty) {
            return null;
        } else {
            const value = this._heap[0];
            const last = this._heap.pop()!;
            if(this.size > 0) {
                this._heap[0] = last;
                this._siftDown();
            }
            return value;
        }
    }
    private _siftUp() {
        let index = this.size - 1;
        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if(this._comparator(this._heap[index], this._heap[parentIndex])) {
                this._swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    private _siftDown() {
        let index = 0;
        while(index < this.size) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let nextIndex = index;
            if(leftChildIndex < this.size && this._comparator(this._heap[leftChildIndex], this._heap[nextIndex])) {
                nextIndex = leftChildIndex;
            }
            if(rightChildIndex < this.size && this._comparator(this._heap[rightChildIndex], this._heap[nextIndex])) {
                nextIndex = rightChildIndex;
            }
            if(nextIndex !== index) {
                this._swap(index, nextIndex);
                index = nextIndex;
            } else {
                break;
            }
        }
    }
    private _swap(index1: number, index2: number) {
        const temp = this._heap[index1];
        this._heap[index1] = this._heap[index2];
        this._heap[index2] = temp;
    }

    public printHeap() {
        console.log(this._heap);
    }

    get values(): T[] {
        return this._heap;
    }
}
//heap class

const minHeap = new Heap<number>((a, b) => a < b);
minHeap.insertValues([5, 3, 7, 1, 9, 2, 8, 4, 6]);
minHeap.printHeap();

const maxHeap = new Heap<number>((a, b) => a > b);
maxHeap.insertValues([5, 3, 7, 1, 9, 2, 8, 4, 6, 6]);
maxHeap.printHeap();


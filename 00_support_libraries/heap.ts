class Heap<T> {
    private _heap: T[];
    private readonly _comparator: (a: T, b: T) => number;
    constructor(comparator: (a: T, b: T) => number) {
        this._heap = [];
        this._comparator = comparator;
    }

    fillWithValues(vals: T[]): void {
        this._heap = vals;
        let i = Math.floor((this.size-2)/2);
        while(i >= 0) {
            this._siftDown(i);
            i--;
        }
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
    insert(value: T): void {
        this._heap.push(value);
        this._siftUpLast();
    }

    insertValues(values: Iterable<T>): void {
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
                this._siftDownRoot();
            }
            return value;
        }
    }

    private _siftUpLast(): void {
        this._siftUp(this.size-1);
    }

    private _siftUp(index: number): void {
        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if(this._comparator(this._heap[index] , this._heap[parentIndex]) < 0) {
                this._swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private _siftDownRoot(): void {
        this._siftDown(0);
    }
    private _siftDown(index: number): void {
        while(index < this.size) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let nextIndex = index;
            if(leftChildIndex < this.size && this._comparator(this._heap[leftChildIndex], this._heap[nextIndex]) < 0) {
                nextIndex = leftChildIndex;
            }
            if(rightChildIndex < this.size && this._comparator(this._heap[rightChildIndex], this._heap[nextIndex]) < 0) {
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
    private _swap(index1: number, index2: number): void {
        const temp = this._heap[index1];
        this._heap[index1] = this._heap[index2];
        this._heap[index2] = temp;
    }

    public print(name: string, sorted: boolean = true): void {
        console.log(`starting to print heap: ${name}  ---------->>>>>>>>>`);
        console.log(this.values(sorted));
        console.log(`ending to print heap: ${name}     ----------<<<<<<<<<<<<<<`);
    }

    values(sorted: boolean = false): T[] {
        if(sorted === false) {
            return [...this._heap];
        } else {
            const ans: T[] = [];
            const copy = this.deepCopy();
            while(!copy.isEmpty) {
                ans.push(copy.remove()!);
            }
            // console.log(ans);
            return ans;
        }

    }

    deepCopy(): Heap<T> {
        const heap = new Heap<T>(this._comparator);
        heap.fillWithValues([...this._heap]);
        return heap;
    }
}
//heap class

const minHeap = new Heap<number>((a, b) => a - b);
minHeap.insertValues([5, 3, 7, 1, 9, 2, 8, 4, 6]);
minHeap.print('minHeap', true);

const maxHeap = new Heap<number>((a, b) => b - a);
maxHeap.insertValues([5, 3, 7, 1, 9, 2, 8, 4, 6, 6]);
maxHeap.print('maxHeap', true);

export { Heap };


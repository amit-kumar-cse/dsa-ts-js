class MonotoneStack<T> {
    private arr: T[];
    private top: number;

    private readonly _comparator: (a: T, b: T) => boolean;

    constructor(comparator: (a: T, b: T) => boolean, initialCapacity: number = 100) {
        this.arr = new Array<T>(initialCapacity);
        this.top = -1;
        this._comparator = comparator;
    }

    isEmpty() : boolean {
        return this.top === -1;
    }

    doubleSize() {
        const temp = new Array<T>(2*this.arr.length);
        for(let i=0; i<=this.top; i++) {
            temp[i] = this.arr[i];
        }
        this.arr = temp;
    }

    push(val: T): void {
        while(this._comparator(this.peek, val)) {
            this.pop();
        }
        if(this.top === this.arr.length-1) {
            this.doubleSize();
        }
        this.arr[++this.top] = val;
    }

    get peek(): T {
        return this.arr[this.top];
    }

    /**
     * 
     * @param val 
     * @returns the top value, throws error if the stack is empty
     */
    pop(): T {
        if(this.top === -1) {
            throw "Stack pop called on empty stack";
        }
        return this.arr[this.top--];
    }

    /**
     * 
     * @param val 
     * @returns the top value, returns undefined if the stack is empty
     */
    poll(): T | undefined {
        if(this.top === -1) {
            return undefined;
        }
        return this.arr[this.top--];
    }

    append(itr: Iterable<T>): void {
        for(const val of itr) {
            this.push(val);
        }
    }

    printTopDown() {
        console.log(`---------------------------------------------------------------`);
        console.log(`Here are the contents of the stack from topside: ========>`);
        //print from top to bottom
        for(let i=this.top; i>=0; i--) {
            console.log(this.arr[i]);
        }
        console.log(`Stack bottom side: ========>`);
        console.log(`---------------------------------------------------------------`);
    }

    printBottomUp() {
        console.log(`---------------------------------------------------------------`);
        console.log(`Here are the contents of the stack from bottom: ========>`);
        //print from top to bottom
        for(let i=0; i<=this.top; i++) {
            console.log(this.arr[i]);
        }
        console.log(`Stack top side: ========>`);
        console.log(`---------------------------------------------------------------`);
    }
}

const monotonicallyDecreasingStack = new MonotoneStack<number>((a, b) => a < b);
monotonicallyDecreasingStack.append([2, 1]);
monotonicallyDecreasingStack.printTopDown();
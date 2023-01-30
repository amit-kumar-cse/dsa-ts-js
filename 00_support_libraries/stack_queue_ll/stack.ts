class Stack<T> {
    private arr: T[];
    private top: number;

    constructor(initialCapacity: number = 100) {
        this.arr = new Array<T>(initialCapacity);
        this.top = -1;
    }

    get isEmpty() : boolean {
        return this.top === -1;
    }

    get size(): number {
        return this.top+1;
    }

    doubleSize() {
        const temp = new Array<T>(2*this.arr.length);
        for(let i=0; i<=this.top; i++) {
            temp[i] = this.arr[i];
        }
        this.arr = temp;
    }

    push(val: T): void {
        if(this.top === this.arr.length-1) {
            this.doubleSize();
        }
        this.arr[++this.top] = val;
    }

    get peek(): T {
        return this.arr[this.top];
    }

    clear(): void {
        this.top = -1;
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

    print() {
        this.printTopDown();
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

    get getItemsAsArray(): T[] {
        return this.arr.slice(0, this.top+1);
    }
}

function evalRPN(tokens: string[]): number {
    const stack = new Stack<number>();
    const plusCharCode = '+'.charCodeAt(0);
    const minusCharCode = '-'.charCodeAt(0);
    const multiplyCharCode = '*'.charCodeAt(0);
    const divideCharCode = '/'.charCodeAt(0);

    let op1: number, op2: number;
    for(const str of tokens) {
        switch(str.charCodeAt(0)) {
            case plusCharCode:
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1+op2);
                break;
            case minusCharCode:
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1-op2);
                break;
            case multiplyCharCode:
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1*op2);
                break;
            case divideCharCode:
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(Math.floor(op1/op2));
                break;
            default:
                stack.push(parseInt(str));
        }
    }
    return stack.peek();
};

// const tokens = ["2","1","+","3","*"];
// const tokens = ["4","13","5","/","+"];
const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];


console.log(evalRPN(tokens));

export default Stack;

// const st = new Stack<number>();
// st.append([1, 2, 3]);
// st.printTopDown();
// st.printBottomUp();


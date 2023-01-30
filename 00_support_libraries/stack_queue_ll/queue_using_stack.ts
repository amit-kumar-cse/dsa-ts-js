import Stack from "./stack";

class MyQueue<T> {
    private enQueueStack: Stack<T>;
    private deQueueStack: Stack<T>;

    constructor() {
        this.enQueueStack = new Stack<T>();
        this.deQueueStack = new Stack<T>();
    }

    push(x: T): void {
        while(!this.deQueueStack.isEmpty()) {
            this.enQueueStack.push(this.deQueueStack.pop());
        }
        this.enQueueStack.push(x);
    }

    pop(): T {
        while(!this.enQueueStack.isEmpty()) {
            this.deQueueStack.push(this.enQueueStack.pop());
        }
        return this.deQueueStack.pop();
    }

    peek(): T {
        while(!this.enQueueStack.isEmpty()) {
            this.deQueueStack.push(this.enQueueStack.pop());
        }
        return this.deQueueStack.peek();
    }

    empty(): boolean {
        return this.enQueueStack.isEmpty() && this.deQueueStack.isEmpty();
    }
}

export default MyQueue;
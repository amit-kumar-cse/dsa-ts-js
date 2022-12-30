//let us create a doubly ended queue using LinkedList in one go, it will be most versatile.
import DoublyLinkedList from "./doubly_linked_list";
class MyQueue<T> {
    private list = new DoublyLinkedList<T>();

    enqueue: (value: T) => void = (value) => {
        this.list.append(value);
    }

    dequeue: () => T | null = () => {
        if (this.list.size === 0) {
            return null;
        }
        const value = this.list.removeHeadAndGetValue();
        return value;
    }

    peek: () => T | null= () => {
        return this.list.getHead()?.data ?? null;
    }

    size: () => number = () => {
        return this.list.size;
    }

    isEmpty: () => boolean = () => {
        return this.list.size === 0;
    }
}

export default MyQueue;
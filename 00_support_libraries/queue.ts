//let us create a doubly ended queue using LinkedList in one go, it will be most versatile.

class Queue<T> {
    private list: LinkedList<T> = new LinkedList();

    add: (value: T) => void = (value) => {
        this.list.add(value);
    }

    remove: () => T = () => {
        const value = this.list.get(0);
        this.list.remove(0);
        return value;
    }

    peek: () => T = () => {
        return this.list.get(0);
    }

    size: () => number = () => {
        return this.list.size();
    }

    isEmpty: () => boolean = () => {
        return this.list.isEmpty();
    }
    
}
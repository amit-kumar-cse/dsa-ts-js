class Counter<T> {
    map: Map<T, number> = new Map();

    constructor(arr: T[] = []) {
        arr.forEach(this.add);
    }

    add: (key: T) => void = (key) => {
        const count = this.map.get(key) || 0;
        this.map.set(key, count + 1);
    }

    remove: (key: T) => void = (key) => {
        const count = this.map.get(key) || 0;
        if (count === 0) {
            return;
        }
        this.map.set(key, count - 1);
    }

    values: () => IterableIterator<number> = () => this.map.values();

    keys: () => IterableIterator<T> = () => this.map.keys();

    valuesArr: () => number[] = () => Array.from(this.values());

    keysArr: () => T[] = () => Array.from(this.keys());

    print: () => void = () => {
        for (const [key, value] of this.map) {
            console.log(`${key}: ${value}`);
        }
    }
}


const counter = new Counter<number>([1, 2, 3, 4, 5, 5, 6]);
counter.print();
export default Counter;
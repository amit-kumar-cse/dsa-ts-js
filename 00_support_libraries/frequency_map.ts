class FrequencyMap<T> {
    private readonly map: Map<T, number>;
    constructor() {
        this.map = new Map<T, number>();
    }
    add(key: T): void {
        const freq = this.map.has(key) ? this.map.get(key)! : 0;
        this.map.set(key, freq + 1);
    }

    addIterator(iterator: Iterable<T>): void {
        for (const item of iterator) {
            this.add(item);
        }
    }
    get(key: T): number | undefined {
        return this.map.get(key);
    }

    has(key: T): boolean {
        return this.map.has(key);
    }

    remove(key: T): void {
        const freq = this.map.has(key) ? this.map.get(key)! : 0;
        if (freq === 1) {
            this.map.delete(key);
        } else {
            this.map.set(key, freq - 1);
        }
    }

    getMostFrequent(): T | undefined {
        let max = 0;
        let maxKey: T | undefined = undefined;
        for (const [key, value] of this.map) {
            if (value > max) {
                max = value;
                maxKey = key;
            }
        }
        return maxKey;
    }

    print(): void {
        console.log(`FrequencyMap: ${this.map}`);
        for (const [key, value] of this.map) {
            console.log(`${key} => ${value}`);
        }
    }
}

const fm = new FrequencyMap();
fm.addIterator([1, 2, 3, 4, 5]);
fm.add(1);
fm.add(1);
fm.add(2);
fm.print();
fm.remove(1);
fm.print();
fm.remove(1);
fm.print();

export default FrequencyMap;
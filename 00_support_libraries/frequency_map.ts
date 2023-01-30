import {Heap} from "./heap";

class KeyFrequency<T> {
    constructor(public key: T, public frequency: number) {}
}

class FrequencyMap<T> {
    private readonly map: Map<T, number>;
    constructor(iterator: Iterable<T> = []) {
        this.map = new Map<T, number>();
        this.addIterable(iterator);
    }

    add(key: T): void {
        const freq = this.map.has(key) ? this.map.get(key)! : 0;
        this.map.set(key, freq + 1);
    }

    addIterable(iterator: Iterable<T>): void {
        for (const item of iterator) {
            this.add(item);
        }
    }
    get(key: T): number {
        if(this.map.has(key)) {
            return this.map.get(key)!;
        } else {
            return 0;
        }
    }

    has(key: T): boolean {
        return this.map.has(key);
    }

    get size(): number {
        return this.map.size;
    }

    keys(): IterableIterator<T> {
        return this.map.keys();
    }

    values(): IterableIterator<number> {
        return this.map.values();
    }

    entries(): IterableIterator<[T, number]> {
        return this.map.entries();
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

    //heap dependent section starts here
    getMostFrequentNKeys(n: number): T[] {
        const maxHeap = new Heap<KeyFrequency<T>>((a, b) => a.frequency > b.frequency);
        for(const key of this.map.keys()) {
            maxHeap.insert(new KeyFrequency(key, this.map.get(key)!));
        }

        const ans: T[] = [];
        for(let i = 0; i < n; i++) {
            if(!maxHeap.isEmpty) {
                const keyFreq = maxHeap.remove()!;
                ans.push(keyFreq.key);
            } else {
                break;
            }
        }
        return ans;
    }

    getMostFrequentNFrequencies(n: number): number[] {
        const keys: T[] = this.getMostFrequentNKeys(n);
        const ans = new Array<number>(n);
        for(let i=0; i<n; i++) {
            ans[i] = this.map.get(keys[i])!;
        }
        return ans;
    }
    //heap dependent section ends here

    print(name: string): void {
        console.log(`Here is the map: ${name}`);
        for (const [key, value] of this.map) {
            console.log(`${key} => ${value}`);
        }
    }
}

const fm = new FrequencyMap();
fm.addIterable([1, 2, 3, 4, 5]);
fm.add(1);
fm.add(1);
fm.add(2);
fm.print('fm');
fm.remove(1);
fm.print('fm');
fm.remove(1);
fm.print('fm');

export default FrequencyMap;

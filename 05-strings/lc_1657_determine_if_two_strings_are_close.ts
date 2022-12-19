function closeStrings(word1: string, word2: string): boolean {
    if(word1.length !== word2.length) {
        return false;
    }

    const fm1 = HashMap.getFreqMap<string>(word1);
    const fm2 = HashMap.getFreqMap<string>(word2);

    const keys1 = Array.from(fm1.keys()).sort();
    console.log(`keys1: ${keys1}`);
    const keys2 = Array.from(fm2.keys()).sort();
    console.log(`keys2: ${keys2}`);

    const isKeyArraysEqual = ArrayHelpers.areArraysEqual<string>(keys1, keys2);

    const freqs1 = Array.from(fm1.values()).sort();
    const freqs2 = Array.from(fm2.values()).sort();

    const isValueArraysEqual = ArrayHelpers.areArraysEqual<number>(freqs1, freqs2);

    return isKeyArraysEqual && isValueArraysEqual;
};

//support functions
class HashMap {
    static getFreqMap<T>(iterable: Iterable<T>){
        const hm = new Map<T, number>();
    
        for(const x of iterable) {
            if(hm.has(x)) {
                const freq: number = hm.get(x)!;
                hm.set(x, freq+1);
            } else {
                hm.set(x, 1);
            }
        }
    
        return hm;
    }
    static printMap(map: Map<any, any>) {
        console.log(`Here is the Map =================>`);
        for(const [key, value] of map.entries()) {
            console.log(`key: ${key}, value: ${value}`);
        }
        console.log(`Map printing ended =================>`);
    }
}

class ArrayHelpers {
    static areArraysEqual<T>(arr1: T[] | null, arr2: T[] | null): boolean {
        if(arr1 === arr2) {
            return true;
        } else if(arr1 != null && arr2 != null) {
            if(arr1.length != arr2.length) {
                return false;
            }
            for(let i=0; i< arr1.length; i++) {
                if(arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }
}

console.log(closeStrings("uau", "ssx"));

export default closeStrings;
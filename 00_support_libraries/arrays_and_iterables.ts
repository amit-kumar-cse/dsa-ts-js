
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

class IterableHelpers {
    static areIterablesEqual<T>(itr1: Iterable<T>, itr2: Iterable<T>) {
        const arr1 = Array.from(itr1);
        const arr2 = Array.from(itr2);

        return ArrayHelpers.areArraysEqual<T>(arr1, arr2);
    }
}
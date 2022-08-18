//https://leetcode.com/problems/reduce-array-size-to-the-half

import Counter from "../libs/counter";

function minSetSize(arr: number[]): number {
    const counter = new Counter(arr);

    const counts = Array.from(counter.values())
        .sort((a, b) => b - a); // Largest to smallest

    let numberOfItemsRemovedFromArr = 0;
    let setSize = 0;

    for (const count of counts) {
        numberOfItemsRemovedFromArr += count;
        setSize += 1;
        if (numberOfItemsRemovedFromArr >= arr.length / 2) {
            break;
        }
    }

    return setSize;
}
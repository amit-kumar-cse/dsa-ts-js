//support functions
class HashMap {
    static printMap(map: Map<any, any>) {
        console.log(`Here is the Map =================>`);
        for(const [key, value] of map.entries()) {
            console.log(`key: ${key}, value: ${value}`);
        }
        console.log(`Map printing ended =================>`);
    }
}

export {HashMap};



// const string1 = "Hare Krishna";
// const string2 = "Hare Rama";
// const map1 = HashMap.getFreqMap<string>(string1);
// const map2 = HashMap.getFreqMap<string>(string2);
// const keys1 = [...map1.keys()].sort();
// const keys2 = [...map2.keys()].sort();
// const isKeyArraysEqual = ArrayHelpers.areArraysEqual<string>(keys1, keys2);
// console.log(`isKeysArraysEqual: ${isKeyArraysEqual}`);
// HashMap.printMap(map1);
// HashMap.printMap(map2);



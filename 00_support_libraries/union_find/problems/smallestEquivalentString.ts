///https://leetcode.com/problems/lexicographically-smallest-equivalent-string/

import {IUnionFind, UnionFind} from "../union_find";

function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const uf: IUnionFind<string> = new UnionFind<string>();
    for(let i=0; i<s1.length; i++) {
        uf.union(s1.charAt(i), s2.charAt(i));
    }

    uf.print();

    const charToMinMap = new Map<string, string>();
    for(const str of [...s1, ...s2, ...baseStr]) {
        //key will be the root
        //value will be the lowest value in the family.
        const key = uf.find(str);
        if(charToMinMap.has(key)) {
            if(str < charToMinMap.get(key)!) {
                charToMinMap.set(key, str);
            }
        } else {
            charToMinMap.set(key, str);
        }
    }

    const ans: string[] = [];

    for(const str of baseStr) {
        ans.push(charToMinMap.get(uf.find(str))!);
    }

    return ans.join('');
};

const s1 = "leetcode";
const s2 = "programs";
const baseStr = "sourcecode";

console.log(smallestEquivalentString(s1, s2, baseStr));
import { HashMap } from "../00_support_libraries/hashmap";

const distinctNumbersInWindow = (A: number[], B: number) => {
    const fm = new Map();

    const ans = [];
    for(let i=0; i<B; i++) {
        const freq = fm.has(A[i]) ? fm.get(A[i]) : 0;
        fm.set(A[i], freq+1);
    }
    ans.push(fm.size);

    for(let i=0, j=B; j<A.length; i++, j++) {
        
        //increase freq of jth item
        let freq = fm.has(A[j]) ? fm.get(A[j]) : 0;
        fm.set(A[j], freq+1);

        //decrease freq of ith item
        freq = fm.has(A[i]) ? fm.get(A[i]) : 0;
        console.log(`freq at this point is : ${freq}`);
        if(freq === 1) {
            fm.delete(A[i]);
        } else {
            fm.set(A[i], freq-1);
        }
        

        HashMap.printMap(fm);

        ans.push(fm.size);
    }

    return ans;
}

const A = [ 2, 7, 7, 81, 81 ];
const B = 1;

console.log(distinctNumbersInWindow(A, B));

export default distinctNumbersInWindow;



/*
Q5. Distinct Numbers in Window
Attempted
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.

Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.

NOTE: if B > N, return an empty array.



Input Format
First argument is an integer array A
Second argument is an integer B.



Output Format
Return an integer array.



Example Input
Input 1:

 A = [1, 2, 1, 3, 4, 3]
 B = 3
Input 2:

 A = [1, 1, 2, 2]
 B = 1


Example Output
Output 1:

 [2, 3, 3, 2]
Output 2:

 [1, 1, 1, 1]


Example Explanation
Explanation 1:

 A=[1, 2, 1, 3, 4, 3] and B = 3
 All windows of size B are
 [1, 2, 1]
 [2, 1, 3]
 [1, 3, 4]
 [3, 4, 3]
 So, we return an array [2, 3, 3, 2].
Explanation 2:

 Window size is 1, so the output array is [1, 1, 1, 1].
        */
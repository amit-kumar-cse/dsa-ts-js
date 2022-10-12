const subarraySumEqualsK = (arr: number[], sum: number): number => {
    // const arr = A.map(num => BigInt(num));
    //     const sum = BigInt(B);

        const ps = new Array(arr.length);
        ps[0] = arr[0];
        for(let i=1; i<arr.length; i++) {
            ps[i] = ps[i-1] + arr[i];
        }

        console.log('ps', ps);

        let ans = 0;
        const psFreqMap = new Map();
        
        psFreqMap.set(0, 1);
        for(let psNow of ps) {
            if(psFreqMap.has(psNow - sum)) {
                ans += psFreqMap.get(psNow - sum);
                console.log(`Found ${psFreqMap.get(psNow - sum)} pairs from ${psNow - sum} to ${psNow}`);
            }

            const psFreq = psFreqMap.has(psNow) ? psFreqMap.get(psNow) : 0;
            psFreqMap.set(psNow, psFreq + 1);
        }
        
        console.log('psFreqMap', psFreqMap);

        return ans;
}

export { subarraySumEqualsK };

// const A = [ -42, -30, -8, 9, 10, -28, 22, -35, -10, -41, -16, 31, 36, -18, 43, -45, 40, -38, -31, -12, -48, 32, 9, 43, 37, 18, -14, -8, 37, -20, -47, -26, -9, -22, -41, 24, -39, 9, 34, 35, -49, -26, -26, -3, -11, -37, 43, -9, 36, 32, 45, 3, 20, 26, 44, 31, 22, 26, -19, 48, 32, 46, 40, -4, 27, 4, -3, -50, -10, -28, 15, 41, -19, -27, -44, -22, 43, 0, 35, -36, 0, 45, -26, -24 ];
// const B = -24;
const A = [ -8, -12, -7, -25, -29, 22, -41, -47, 31, 27, -27, -9, -27, -26, -31, 13, -44, -47, 21, 17, 9, 43, 46, -35, -29, -44, -41, 7, 22, -7, 35, 24, 26, -48, 5, -8, 32, 25, -48, 2, -28, -4, -7, -37, -17, 30, -27, -1, 44, -14, 3 ];
const B = -8;

console.log(subarraySumEqualsK(A, B));


/*
Q5. Subarray Sum Equals K
Attempted
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Given an array of integers A and an integer B.

Find the total number of subarrays having sum equals to B.


Input Format

The first argument given is the integer array A.
The second argument given is integer B.
Output Format

Return the total number of subarrays having sum equals to B.
Constraints

1 <= length of the array <= 50000
-1000 <= A[i] <= 1000 
For Example

Input 1:
    A = [1, 0, 1]
    B = 1
Output 1:
    4
    Explanation 1:
        [1], [1, 0], [0, 1] and [1] are four subarrays having sum 1.

Input 2:
    A = [0, 0, 0]
    B = 0
Output 2:
    6
    */
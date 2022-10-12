const lengthOfTheLargestConsecutiveOnes = (str: string) => {
    let ones = 0;
    [...str].forEach(s => {
        if(s === "1") {
            ones++;
        }
    })
    if(ones === str.length) {
        return ones;
    }
    const arr = [...str];
    let max = 0;
    arr.forEach((s, i) => {
        if(s === "0") {
            let left1Count = 0;
            for(let l=i-1; l>=0 && arr[l]==="1"; l--) {
                left1Count++;
            }
            let right1Count = 0;
            for(let r=i+1; r<arr.length && arr[r]==="1"; r++) {
                right1Count++;
            }
            if(left1Count + right1Count < ones) {
                max = Math.max(max, left1Count + right1Count + 1);
            } else {
                max = Math.max(max, left1Count + right1Count);
            }
        }
    });
    return max;

}

export { lengthOfTheLargestConsecutiveOnes };



/*
Q2. Length of longest consecutive ones
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.


Input Format

The only argument given is string A.
Output Format

Return the length of the longest consecutive 1’s that can be achieved.
Constraints

1 <= length of string <= 1000000
A contains only characters 0 and 1.
For Example

Input 1:
    A = "111000"
Output 1:
    3

Input 2:
    A = "111011101"
Output 2:
    7
    */
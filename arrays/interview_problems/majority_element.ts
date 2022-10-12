const majorityElement = (A: number[]): number => {
    let candidate: number | null = null;
    let freq = 0;

    A.forEach(num => {
        if(num === candidate) {
            freq++;
        } else if (freq > 0) {
            freq--;
        } else {
            candidate = num;
            freq = 1;
        }
    })

    let actualFreq = 0;
    A.forEach(num => {
        if(num === candidate) {
            actualFreq++;
        }
    })
    if(actualFreq > A.length/2) {
        return Number(candidate);
    }
    return -1;
}

export {majorityElement};


/*
Q2. Majority Element
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description

Given an array of size N, find the majority element. The majority element is the element that appears more than floor(n/2) times.
You may assume that the array is non-empty and the majority element always exists in the array.



Problem Constraints

1 <= N <= 5*105
1 <= num[i] <= 109


Input Format

Only argument is an integer array.


Output Format

Return an integer.


Example Input

[2, 1, 2]


Example Output

2


Example Explanation

2 occurs 2 times which is greater than 3/2.
*/
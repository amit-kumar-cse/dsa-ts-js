const evenNumbersInRange = (A: BigInt[], B: number[][]) => {
    const ps = new Array(A.length);
        ps[0] = (A[0]%2n===0n) ? 1 : 0;

        for(let i=1; i<A.length; i++) {
            ps[i] = ps[i-1] + ((A[i]%2n===0n) ? 1 : 0);
        }

        const result = [];

        for(let range of B) {
            if(range[0] === 0) {
                result.push(ps[range[1]]);
            } else {
                result.push(ps[range[1]] - ps[range[0]-1]);
            }
        }

        return result;
}


/*
Q6. Even numbers in a range
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
For every query, the task is to find the count of even numbers in the range A[B[i][0]…B[i][1]].


Problem Constraints
1 <= N <= 105
1 <= Q <= 105
1 <= A[i] <= 109
0 <= B[i][0] <= B[i][1] < N


Input Format
First argument A is an array of integers.
Second argument B is a 2D array of integers.


Output Format
Return an array of integers.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [   [0,2] 
        [1,4]   ]
Input 2:
A = [2, 1, 8, 3, 9]
B = [   [0,3] 
        [2,4]   ]


Example Output
Output 1:
[1, 2]
Output 2:
[2, 1]


Example Explanation
For Input 1:
The subarray for the first query is [1, 2, 3] which contains 1 even number.
The subarray for the second query is [2, 3, 4, 5] which contains 2 even numbers.
For Input 2:
The subarray for the first query is [2, 1, 8, 3] which contains 2 even numbers.
The subarray for the second query is [8, 3, 9] which contains 1 even number.
*/
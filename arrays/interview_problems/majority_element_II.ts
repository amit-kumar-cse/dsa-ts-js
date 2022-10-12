const nby3repeatNumber = (A :number[]) => {
    let cand1: number | null = null;
    let freq1 = 0;
    let cand2: number | null = null;
    let freq2 = 0;

    A.forEach(num => {
        if(num === cand1) {
            freq1++;
        } else if(num === cand2) {
            freq2++;
        } else if(freq1 > 0 && freq2 > 0) {
            freq1--;
            freq2--;
        } else if(freq1 === 0) {
            cand1 = num;
            freq1++;
        } else if(freq2 === 0) {
            cand2 = num;
            freq2++;
        } else {
            console.log("impossible case");
        }
    });

    //return cand1 if it have sufficient frequency.
    let cand1Count = 0;
    A.forEach(num => {
        if(num === cand1) {
            cand1Count++;
        }
    })
    if(cand1Count > A.length/3) {
        return cand1;
    }

    //return cand2 if it have sufficient frequency.
    let cand2Count = 0;
    A.forEach(num => {
        if(num === cand2) {
            cand2Count++;
        }
    })
    if(cand2Count > A.length/3) {
        return cand2;
    }
    return -1;
}

export {nby3repeatNumber};

/*
Problem Description

You're given a read-only array of N integers. Find out if any integer occurs more than N/3 times in the array in linear time and constant additional space.
If so, return the integer. If not, return -1.

If there are multiple solutions, return any one.



Problem Constraints

1 <= N <= 7*105
1 <= A[i] <= 109


Input Format

The only argument is an integer array A.


Output Format

Return an integer.


Example Input

[1 2 3 1 1]


Example Output

1


Example Explanation

1 occurs 3 times which is more than 5/3 times.
*/

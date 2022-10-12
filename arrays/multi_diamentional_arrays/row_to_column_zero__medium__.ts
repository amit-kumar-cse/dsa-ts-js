const rowToColumZero: (A: number[][]) => number[][] = (A) => {
    let rowsToSetZero = new Array(A.length).fill(0);
        let colsToSetZero = new Array(A[0].length).fill(0);

        for(let row=0; row<A.length; row++) {
            for(let col=0; col<A[0].length; col++) {
                if(A[row][col] === 0) {
                    rowsToSetZero[row] = 1;
                    colsToSetZero[col] = 1;
                }
            }
        }

        for(let row=0; row<A.length; row++) {
            for(let col=0; col<A[0].length; col++) {
                if(rowsToSetZero[row] === 1 || colsToSetZero[col] === 1) {
                    A[row][col] = 0;
                }
            }
        }

        return A;
}

/*
You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.



Problem Constraints
1 <= A.size() <= 103

1 <= A[i].size() <= 103

0 <= A[i][j] <= 103



Input Format
First argument is a vector of vector of integers.(2D matrix).



Output Format
Return a vector of vector after doing required operations.



Example Input
Input 1:

[1,2,3,4]
[5,6,7,0]
[9,2,0,4]


Example Output
Output 1:

[1,2,0,0]
[0,0,0,0]
[0,0,0,0]


Example Explanation
Explanation 1:

A[2][4] = A[3][3] = 0, so make 2nd row, 3rd row, 3rd column and 4th column zero.
*/

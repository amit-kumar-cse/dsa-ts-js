// https://leetcode.com/problems/rotate-image

function rotate(matrix: number[][]): void {
    const iLimit = Math.floor((matrix.length-1)/2);
    const n = matrix.length;
    for(let i=0; i<=iLimit; i++) {
        for(let j=0; j<matrix.length-1-2*i; j++) {
            const temp = matrix[i][i+j];
            matrix[i][i+j] = matrix[n-1-i-j][i];
            matrix[n-1-i-j][i] = matrix[n-1-i][n-1-i-j];
            matrix[n-1-i][n-1-i-j] = matrix[i+j][n-1-i];
            matrix[i+j][n-1-i] = temp;
        }
    }
};
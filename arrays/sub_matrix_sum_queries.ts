const subMatrixSumQueries = (
    matrix: number[][], 
    B: number[],
    C: number[],
    D: number[],
    E: number[]
    ) => {
    const m = matrix.length;
    const n = matrix[0].length;
    const prefixSum = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0n));
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            prefixSum[i][j] = prefixSum[i-1][j] + prefixSum[i][j-1] - prefixSum[i-1][j-1] + BigInt(matrix[i-1][j-1])
        }
    }
    const result = [];
    for(let i = 0; i < B.length; i++) {
        result.push(prefixSum[D[i]][E[i]] - prefixSum[D[i]][C[i]-1] - prefixSum[B[i]-1][E[i]] + prefixSum[B[i]-1][C[i]-1]);
    }
    return result;
}
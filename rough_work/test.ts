///Given an m x n matrix grid where each cell is either a wall 'W', an enemy 'E' or empty '0', return the maximum enemies you can kill using one bomb. You can only place the bomb in an empty cell.
//
// The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since it is too strong to be destroyed.
//
//
//
// Example 1:
//
//
// Input: grid = [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
// Output: 3
// Example 2:
//
//
// Input: grid = [["W","W","W"],["0","0","0"],["E","E","E"]]
// Output: 1
//
//
// Constraints:
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 500
// grid[i][j] is either 'W', 'E', or '0'.


function maxKilledEnemies(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const rowCounts = new Array(rows).fill(0);
    const colCounts = new Array(cols).fill(0);
    let result = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (col === 0 || grid[row][col - 1] === 'W') {
                rowCounts[row] = 0;
                for (let i = col; i < cols && grid[row][i] !== 'W'; i++) {
                    if (grid[row][i] === 'E') {
                        rowCounts[row]++;
                    }
                }
            }
            if (row === 0 || grid[row - 1][col] === 'W') {
                colCounts[col] = 0;
                for (let i = row; i < rows && grid[i][col] !== 'W'; i++) {
                    if (grid[i][col] === 'E') {
                        colCounts[col]++;
                    }
                }
            }
            if (grid[row][col] === '0') {
                result = Math.max(result, rowCounts[row] + colCounts[col]);
            }
        }
    }
    return result;
};
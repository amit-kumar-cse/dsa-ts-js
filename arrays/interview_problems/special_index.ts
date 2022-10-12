const specialIndex = (A: number[]): number => {
    // console.log('A', A);
    const psEven = new Array(A.length);
    if(A.length > 0) {
        psEven[0] = A[0];
    }
    for(let i=1; i<A.length; i++) {
        psEven[i] = psEven[i-1];
        if(i%2===0) {
            psEven[i] += A[i];
        }
    }

    // console.log('psEven', psEven);

    const psOdd = new Array(A.length).fill(0);
    for(let i=1; i<A.length; i++) {
        psOdd[i] = psOdd[i-1];
        if(i%2===1) {
            psOdd[i] += A[i];
        }
    }

    // console.log('psOdd', psOdd);

    let count = 0;
    for(let i=0; i<A.length; i++) {
        const evenSum = i===0 ? 0 : psEven[i-1] + psEven[A.length-1] - psEven[i];
        const oddSum = i===0? 0 : psOdd[i-1] + psOdd[A.length-1] - psOdd[i];
        if(evenSum === oddSum) {
            count++;
        }
    }

    return count;
}

export {specialIndex};

const arr = [ -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33, -34, 69, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 ];
const arr1 = [ -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33, -34, -35, -36, -37, -38, -39, -40, -41, -42, -43, 87, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43 ];
const arr2 = [ -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33, -34, 69, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 ]

console.log(specialIndex(arr2));
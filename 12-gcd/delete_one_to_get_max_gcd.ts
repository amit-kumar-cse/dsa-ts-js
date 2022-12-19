import GCD from './gcd';

const deleteOneToGetMaxGcd = (arr: number[]): number => {
    const n = arr.length;

    const suffixGCD = new Array(n);
    suffixGCD[n-1] = arr[n-1];
    for(let i=n-2; i>=0; i--) {
        suffixGCD[i] = GCD.gcd(suffixGCD[i+1], arr[i]);
    }
    console.table(`suffixGCD: ${suffixGCD}`);

    const prefixGCD = new Array(n);
    prefixGCD[0] = arr[0];
    for(let i=1; i<n; i++) {
        prefixGCD[i] = GCD.gcd(prefixGCD[i-1], arr[i]);
    }
    console.log(`prefixGCD: ${prefixGCD}`);

    let maxGCD = 1;

    for(let i=0; i<n; i++) {
        const leftGCD = i===0 ? 1 : prefixGCD[i-1];
        const rightGCD = i===n-1 ? 1 : suffixGCD[i+1];
        maxGCD = Math.max(maxGCD, GCD.gcd(leftGCD, rightGCD));

        console.log(`i: ${i}, num: ${arr[i]}, leftGCD: ${leftGCD}, rightGCD: ${rightGCD}, maxGCD: ${maxGCD}`);
    }

    return maxGCD;
}

const A = [ 208610688, 48106344, 135402124, 34168992, 95013776, 35218040, 117231114, 172905590, 66652014, 45970782, 222323244, 203402914, 35292972, 159829956, 154584716, 107190226, 71335264, 42786172, 203327982, 3484338, 28062034, 64179258, 210993, 94938844, 155858560, 123562868, 223447224, 116744056, 55711942, 88082566, 45671054, 16072914, 165299992, 136601036, 44659472, 219063702, 202953322, 188341582, 116931386, 127759060, 131318330, 49867246, 92278758, 40875406, 218314382, 135889182, 6893744, 97111872, 56236466, 96662280, 52340002, 195010530, 44884268, 167435554, 155746162, 201679478, 54138370, 103481092, 25814074, 186093622, 208498290, 31883566, 122101694, 128058788, 133566290, 55749408, 178675354, 186056156, 155071774, 35180574, 82050540, 7755462, 29448276, 100333948, 130156884, 67850926, 44509608, 17084496, 216703344, 197295956, 174479162, 18058612, 51290954, 173917172, 51815478, 218426780, 184032992, 148140564, 108951128 ];
console.log(deleteOneToGetMaxGcd(A));
console.log(GCD.gcd(42, 49));


/*
Problem Description

Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.

Find the maximum value of GCD.



Problem Constraints

2 <= N <= 105 
1 <= A[i] <= 109



Input Format

First argument is an integer array A.



Output Format

Return an integer denoting the maximum value of GCD.



Example Input

Input 1:

 A = [12, 15, 18]
Input 2:

 A = [5, 15, 30]


Example Output

Output 1:

 6
Output 2:

 15


Example Explanation

Explanation 1:

 
 If you delete 12, gcd will be 3.
 If you delete 15, gcd will be 6.
 If you delete 18, gcd will 3.
 Maximum vallue of gcd is 6.
Explanation 2:

 If you delete 5, gcd will be 15.
 If you delete 15, gcd will be 5.
 If you delete 30, gcd will be 5.

 */
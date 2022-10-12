const countSubarrayZeroSum = (arr: (number | bigint)[]): number => {
    const modulo = BigInt((1<<9) + 7);
        const psFreq = new Map();
        let ps = 0n;

        psFreq.set(ps, 1n);
        for(let num of arr) {
            ps += BigInt(num);
            const freq = psFreq.has(ps) ? psFreq.get(ps) : 0n;
            psFreq.set(ps, freq + 1n);
        }

        console.log('psFreq', psFreq);

        let ans = 0n;
        psFreq.forEach((freq, ps) => {
            // ans = (ans + ((freq*(freq-1n))/2n))%modulo;
            ans = ans + ((freq*(freq-1n))/2n);
            console.log('ans', ans);
        });

        return Number(ans);
}

export { countSubarrayZeroSum };

const arr1 = [ 209, -39, 178, -129, 185, -234, 74, -264, 214, 125, -33, -212, 20, -69, 141, 196, -124, -49, -154, -259, 65, 156, -16, 156, -158, 156, 230, 124, -64, 119, 176, -101, 136, -251, 82, -79, -25, -58, 96, -172, -269, -170, -159, -104, 42, 222, 223, -46, -245, -255, 27, 252, 50, 238, 186, 47, -221, 92, -239, -92, -83, 94, 92, 89, -115, 152, 208, -25, -273, 162, -105, -209, 168, 261, -110, -49, -188, 271, -126, -139, 30, -155, -93, -117, 51, -32, -3, -16, -272, -44, 52, -20, -85, 249, -40, -221, 6, 34, 230, -112, -125, -274, -277, 112, 193, 64, 112, 86, 170, -21, -235, 97, 221, 50, 275, -180, -43, -165, 17, 6, 222, 9, 92, 214, -145, 45, 98, -277, 107, -210, 149, -186, -256, -176, -68, -242, -244, 4, -122, 255, 130, -64, -165, 71, 116, 45, 56, 6, 216, -14, -116, 50, 115, 3, -270, -264, -64, 84, 231, -60, -228, -122, 69, -13, 152, -203, -167, -168, 233, 211, -219, 15, -39, 162, -50, -261, -126, -144, 163, 201, -107, -263, -209, -160, -83, 189, -243, -158, -227, 15, -137, -240, 184, -24, -52, 270, 131, 8, 17, 263, 138, 5, -268, 87, 137, -215, -27, 0, 28, 14, -105, -129, -108, 266, 135, -113, -201, 176, -255, 245, 144, -31, -274, 76, 254, 186, 168, 151, 54, -240, -1, 82, 130, 265, -60, -21, -181, -48, -80, -7, -163, 111, -155, 71, 254, -234, 148, -26, -229, 135, 91, -67, 0, 231, -136, -191, 13, 142, 273, 143, -188, -71, 13, 245, -144, -195, 173, 205, 222, 41, -212, 106, 183, 165, -231, 142, 154 ];
const arr2 = [ 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000 ];
console.log(countSubarrayZeroSum(arr2));


/*
Problem Description

Given an array A of N integers.

Find the count of the subarrays in the array which sums to zero. Since the answer can be very large, return the remainder on dividing the result with 109+7


Problem Constraints

1 <= N <= 105
-109 <= A[i] <= 109


Input Format

Single argument which is an integer array A.


Output Format

Return an integer.


Example Input

Input 1:

 A = [1, -1, -2, 2]
Input 2:

 A = [-1, 2, -1]


Example Output

Output 1:

3
Output 2:

1


Example Explanation

Explanation 1:

 The subarrays with zero sum are [1, -1], [-2, 2] and [1, -1, -2, 2].
Explanation 2:

 The subarray with zero sum is [-1, 2, -1].
 */
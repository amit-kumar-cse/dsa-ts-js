const reverseBits = (A: number): number => {
  let lsb = 0;
  let msb = 31;
  console.log('A at point 0 in binary is: ', A.toString(2));
  console.log('the length of a is: ', A.toString(2).length);
  while (lsb < msb) {
    //exchange bits
    const isLsbSet = (A & (1 << lsb)) > 0;
    const isMsbSet = (A & (1 << msb)) > 0;

    //set lsb and msb to 0;
    const resetMask: number = ~((1 << lsb) | (1 << msb));
    console.log('resetMask', resetMask.toString(2));
    A = A & resetMask;

    console.log('A at point 1 is: ', A);
    console.log('A at point 1 in binary is: ', A.toString(2));

    if (isLsbSet) {
      A = A | (1 << msb);
    } 
    // else {
    //     A = A & ~(1 << msb);
    // }
    if (isMsbSet) {
      A = A | (1 << lsb);
    }

    lsb++;
    msb--;
  }
  return A;
};

export {reverseBits};

console.log(reverseBits(1));

/*
Problem Description

Reverse the bits of an 32 bit unsigned integer A.



Problem Constraints

0 <= A <= 232



Input Format

First and only argument of input contains an integer A.



Output Format

Return a single unsigned integer denoting the decimal value of reversed bits.



Example Input

Input 1:

 0
Input 2:

 3


Example Output

Output 1:

 0
Output 2:

 3221225472


Example Explanation

Explanation 1:

        00000000000000000000000000000000    
=>      00000000000000000000000000000000
Explanation 2:

        00000000000000000000000000000011    
=>      11000000000000000000000000000000



See Expected Output
*/

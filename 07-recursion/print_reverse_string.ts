const printReverseString = (str: string): void => {
    // if (str.length === 0) {
    //     return;
    // }
    // printReverseString(str.slice(1));
    // console.log(str[0]);
    const data = process.stdin.read();
    if (data !== null) {
        console.log('data');
    }
    console.log('data');
    
}




/*
Problem Description

Write a recursive function that, given a string S, prints the characters of S in reverse order.



Problem Constraints

1 <= |s| <= 1000



Input Format

First line of input contains a string S.



Output Format

Print the character of the string S in reverse order.



Example Input

Input 1:

 scaleracademy
Input 2:

 cool


Example Output

Output 1:

 ymedacarelacs
Output 2:

 looc


Example Explanation

Explanation 1:

 Print the reverse of the string in a single line.
 */
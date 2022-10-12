const elementsRemoval = (arr: number[]): number => {
    // arr.forEach((a, i) => {
    //     console.log(a, i, typeof(a));
    // });
    // console.log(arr);
    arr.sort((a, b) => a - b);
    let result = 0;
    arr.forEach((item, index) => {
        result += item*(arr.length - index);
    });

    return result;
}

export {elementsRemoval};

const arr = [ 579, 407, 436, 847, 929, 430, 40, 730, 608, 710, 796, 722, 48, 514, 582, 858, 634, 303, 292, 323, 869, 442, 754, 247, 10, 551, 383, 523, 878, 931, 970 ];
console.log(elementsRemoval(arr));



/*
Problem Description

Given an integer array A of size N. You can remove any element from the array in one operation. 
The cost of this operation is the sum of all elements in the array present before this operation.

Find the minimum cost to remove all elements from the array.



Problem Constraints

0 <= N <= 1000
1 <= A[i] <= 103



Input Format

First and only argument is an integer array A.



Output Format

Return an integer denoting the total cost of removing all elements from the array.



Example Input

Input 1:

 A = [2, 1]
Input 2:

 A = [5]


Example Output

Output 1:

 4
Output 2:

 5


Example Explanation

Explanation 1:

 Given array A = [2, 1]
 Remove 2 from the array => [1]. Cost of this operation is (2 + 1) = 3.
 Remove 1 from the array => []. Cost of this operation is (1) = 1.
 So, total cost is = 3 + 1 = 4.
Explanation 2:

 There is only one element in the array. So, cost of removing is 5.
 */
import { reverseArraySubpart } from "./reverse_array_subpart";

const rotateArrayRight: (A: number[], B: number) => number[] = (A, B) =>{
    B = B%(A.length);

    // i need temp array
    let temp = new Array(A.length);

    //maps first A.length - B items towards the end of array.
    for(let i=0; i<(A.length-B); i++){
        temp[i+B] = A[i];
    }

    //maps rest items towards the beginning.
    for(let i=0; i<B; i++) {
        temp[i] = A[i+A.length-B];
    }

    //take all items back to Array A
    for(let i=0; i<temp.length; i++) {
        A[i] = temp[i];
    }
    return A;
}

//optimal algorithm for this.
const rotateArrayRightOptimized: (A: number[], B: number) => number[] = (A, B) =>{
    B = B%(A.length);
    
    reverseArraySubpart(A, 0, A.length-1);
    reverseArraySubpart(A, 0, B-1);
    reverseArraySubpart(A, B, A.length-1);

    return A;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(rotateArrayRight(arr, 4));
console.log(rotateArrayRightOptimized(arr, 4));
console.log(rotateArrayRightOptimized(arr, 4));

export {rotateArrayRight, rotateArrayRightOptimized};

//Space complexity: O(n)
//Time complexity: O(n)
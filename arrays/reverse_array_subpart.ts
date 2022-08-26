// function to reverse an array from left to right:
const reverseArraySubpart : (arr: number[], left: number, right: number) => number[] 
    = (arr, left, right) => {
    while(left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

export {reverseArraySubpart};

//Time complexity: O(Right - Left)
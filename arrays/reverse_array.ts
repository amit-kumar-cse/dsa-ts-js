const reverseArray = (arr: number[]) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

export {reverseArray};

//Time complexity: O(n)
//Space complexity: O(1)
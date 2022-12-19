function maxArea(height: number[]): number {
    let i=0, j=height.length-1, ans = 0;

    while(i<j) {
        ans = Math.max(ans, Math.min(height[i], height[j])*(j-i) );
        console.log(`i: ${i}, j: ${j}, ans: ${ans}`);
        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return ans;
};

export default maxArea;

const arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));
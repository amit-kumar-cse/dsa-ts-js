function trap(height: number[]): number {
    console.log(`heights: ${height}`);
    const n = height.length;
    const suffixMax: number[] = new Array<number>(n);

    suffixMax[n-1] = 0;
    for(let i=n-2; i>=0; i--) {
        suffixMax[i] = Math.max(suffixMax[i+1], height[i+1]);
    }
    console.log(`suffixMax: ${suffixMax}`);

    let prefixMax = 0;
    let water = 0;

    for(let i=0; i<n; i++) {
        console.log(`at index ${i}, prefixMax: ${prefixMax}, suffixMax[i]: ${suffixMax[i]}, height: ${height[i]}`);
        const contribution = Math.max(Math.min(prefixMax, suffixMax[i]) - height[i], 0);
        console.log(`contribution of item on index ${i} is ${contribution}`);
        water += contribution;
        prefixMax = Math.max(prefixMax, height[i]);
    }
    return water;
};

const arr = [4,2,0,3,2,5];

console.log(trap(arr));

export default trap;

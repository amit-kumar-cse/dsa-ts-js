function minimumAverageDifference(nums: number[]): number {
    const n = nums.length;
    const ps: number[] = new Array<number>(nums.length);
    
    ps[0] = nums[0];
    
    for(let i=1; i<nums.length; i++) {
        ps[i] = ps[i-1] + nums[i];
    }

    console.log(`ps: ${ps}`);
    
    let minDiff = Number.MAX_SAFE_INTEGER;
    let minDiffIndex = -1;
    
    for(let i=0; i<nums.length; i++) {
        //average of left [0,i] range, rounded down to the nearest integer.
        let leftAvg = Math.round(ps[i]/(i+1));
        
        //average of right [i+1,n-1] range, rounded down to the nearest integer.
        let rightAvg = i<n-1 ? Math.round((ps[n-1]-ps[i])/(n-i-1)) : 0;
        
        let diff = Math.abs(leftAvg-rightAvg);
        
        if(diff < minDiff) {
            minDiff = diff;
            minDiffIndex = i;
        }

        console.log(`at index {i}, leftAvg is ${leftAvg}, rightAvg: ${rightAvg}, diff: ${diff}, midDiff: ${minDiff}, minDiffIndex: ${minDiffIndex}`);
    }
    
    return minDiffIndex;

};

export default minimumAverageDifference;

// const arr = [2,5,3,9,5,3];
const arr = [0];

console.log(minimumAverageDifference(arr));

console.log("Hare Krsna");

//leetcode problem https://leetcode.com/problems/minimum-average-difference/
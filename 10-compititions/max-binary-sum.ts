const maxBinarySum = function(numCount: number, maxOps: number, nums: string[]){
    console.log(`numCount: ${numCount}, maxOps: ${maxOps}, nums: ${nums}`);
    const bigInts: bigint[] = nums.map(num => BigInt("0b"+num));
    console.log(`bigInts: ${bigInts}`);
    const reverses = nums.map(numString => {
        let result = '';
        for(let i=0; i<numString.length; i++) {
            result += (numString.charAt(i) === '0') ? '1' : '0';
        }
        return result;
    });
    console.log(`reverses: ${reverses}`);
    const reverseBigInts: bigint[] = reverses.map(num => BigInt("0b"+num));
    console.log(`reverseBigInts: ${reverseBigInts}`);
    const differences: [bigint, number][] = [];
    for(let i=0; i<nums.length; i++) {
        differences.push([reverseBigInts[i]-bigInts[i], i]);
    } 
    console.log(`differences: ${differences}`);
    differences.sort((a, b) => Number(b[0]-a[0]));
    console.log(`differences: ${differences}`);
    
    let sum = 0n;
    let ops = 0;
    let i=0;
    for(; ops < maxOps && differences[i][0] > 0; i++, ops++) {
        sum += reverseBigInts[differences[i][1]];
    }
    console.log(`i: ${i}`);
    for(; i<numCount; i++) {
        sum += bigInts[differences[i][1]];
    }
    console.log(`sum: ${sum}`);
    
    return sum.toString(2);
}

export { maxBinarySum };

const numCount = 4;
const maxOps = 1;
const nums = ['1000010101', '0111110011', '1001010111', '0100011011'];

console.log(maxBinarySum(numCount, maxOps, nums));


const power = (base: bigint, exponent: bigint): bigint => {
// const power = (base, exponent) => {
    console.log('Calling the function again');
    if(exponent < 0n) {
        console.log('exponent must be a non-negative integer');
    }
    if(exponent===0n) {
        console.log('the item have came here.');
        console.log('return value for base', base, 'and exponent', exponent, 'is', 1n);
        return 1n;
    } 
    // else if (exponent === 1n) {
    //     console.log('the item have came here.');
    //     console.log('return value for base', base, 'and exponent', exponent, 'is', base);
    //     return base;
    // } 
    else if(base%2n===0n) {
        const result = power(base*base, exponent/2n);
        console.log('return value for base', base, 'and exponent', exponent, 'is', result);
        return result;
    } else {
        const result = base*power(base*base, (exponent-1n)/2n);
        console.log('return value for base', base, 'and exponent', exponent, 'is', result);
        return result;
    }
}

export { power };

console.log(power(2n, 10n));
const addBinary = (A: string, B: string): string => {
    A = A.split("").reverse().join("");
    B = B.split("").reverse().join("");

    let remaining = 0;
    let sum  = '';
    for(let i=0; i<A.length || i<B.length; i++) {
        const a: number = i < A.length ? parseInt(A[i]) : 0;
        const b: number = i < B.length ? parseInt(B[i]) : 0;
        const digitSum  = remaining + a + b;
        console.log(`digitSum: ${digitSum}`);
        sum += ((digitSum&1) > 0) ? '1' : '0';
        remaining = Math.floor(digitSum/2);
    }
    if(remaining > 0) {
        sum += remaining;
    }

    return sum.split("").reverse().join("");
}

console.log(addBinary('1', '1'));

export {addBinary};

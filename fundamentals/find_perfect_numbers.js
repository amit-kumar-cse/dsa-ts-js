/*You are given an integer A. You have to tell whether it is a perfect number or not.

Perfect number is a positive integer which is equal to the sum of its proper positive divisors.

A proper divisor of a natural number is the divisor that is strictly less than the number.*/

const isPerfectNumber = (A) => {
    let sum = 0;
    for(let i=1; i*i<=A; i++) {
        if(i === 1 && A !== 1) {
            sum += 1;
        } else if(i*i === A && A !== 1) {
            sum += i;
        } else if(A%i === 0){
            sum += i + A/i;
        }
    }

    if(sum === A) {
        return 1;
    } else {
        return 0;
    }
}

console.log(isPerfectNumber(1));

export {isPerfectNumber};
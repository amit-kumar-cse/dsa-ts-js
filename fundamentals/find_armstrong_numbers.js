const findArmstrongNumbers = (A) => {
    let numbers = [];
    for(let i = 1; i<=A; i++) {
        if(isArmstrongNumber(i))    {
            numbers.push(i);
        }
    }
    return numbers;
}

const isArmstrongNumber = (A) => {
    let sum = 0;
    let temp = A;
    while(temp > 0) {
        const decimal = temp%10;
        sum += decimal*decimal*decimal;
        temp = Math.floor(temp/10);
    }
    if(A === sum) {
        return 1;
    } else {
        return 0;
    }
}

console.log(Math.random());
// console.log(findArmstrongNumbers(300));
console.log(isArmstrongNumber(1));
export {findArmstrongNumbers};
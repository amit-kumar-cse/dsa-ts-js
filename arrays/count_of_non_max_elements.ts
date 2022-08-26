//Algo 1.

const countOfNonMaxElements: (arr: number[]) => number = (arr) => {
    //find max element.
    let MC = Number.MIN_VALUE;
    for(let num of arr) {
        MC = Math.max(MC, num);
    }

    //find count of max element
    let count = 0;
    for(let num of arr) {
        if(num == MC) {
            count++;
        }
    }
    return arr.length - count;
}

//Algo 2. Can we do it in 1 one loop only.
const countOfNonMaxElements1 : (arr: number[]) => number = (arr) => {
    let MC = Number.MIN_VALUE;
    let count = 0;

    for(let num of arr) {
        if(MC === num) {
            count++;
        } else if(num > MC) {
            count = 1;
            MC = num;
        }
    }

    return arr.length - count;

    //note: for larger arrays, this algo with become more preformant, as we have 
    // loop thorugh only once.
}

const numbers = [2, 3, 4, 5, 6, 6];

console.log(countOfNonMaxElements(numbers));
console.log(countOfNonMaxElements1(numbers));

export {countOfNonMaxElements, countOfNonMaxElements1};
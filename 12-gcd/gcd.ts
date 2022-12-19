class GCD {
    static gcd(a: number, b: number): number {
        if (b === 0) {
            return a;
        }
        return GCD.gcd(b, a % b);
    }

    static gcdArray(arr: number[]): number {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = GCD.gcd(result, arr[i]);
        }
        return result;
    }
}

export default GCD;

const num1 = 108951128;
const num2 = 148140564;
console.log(`GCD of ${num1} and ${num2} is ${GCD.gcd(num1, num2)}`);
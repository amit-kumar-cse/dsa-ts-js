class PrefixSum<T> {
    ps: T[];

    constructor(arr: T[]) {
        this.ps = new Array(arr.length);
        if(arr.length > 0) {
            this.ps[0] = arr[0];
        }
        for(let i=1; i<arr.length; i++) {
            if(typeof this.ps[i] === 'number' && typeof arr[i] === 'number') {
                // this.ps[i] = this.ps[i-1] as number + arr[i];
            }

            
        }
    }
}
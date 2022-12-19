function(height: number, width: number, arr: number[]){
    const breaks = new Map();
    let currentSum = 0;
    for(let brickWidth of arr) {
        currentSum += brickWidth;
        if(currentSum === width) {
            currentSum = 0;
        }
        if(currentSum !== 0) {
            const freq = breaks.has(currentSum) ? breaks.get(currentSum) : 0;
            breaks.set(currentSum + 1, freq + 1);    
        }
    }
    
    let maxFreq = 0;
    for (const [key, value] of breaks) {
        maxFreq = Math.max(maxFreq, value);
    }
    return height - maxFreq;
}
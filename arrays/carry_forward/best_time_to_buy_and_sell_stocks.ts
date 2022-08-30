const bestTimeToBuyAndSellStocks = (prices: number[]): number => {
    if(prices.length <= 1) {
        return 0;
    }

    //prefix min
    //prefixMin[i] contains min price upto this point
    const prefixMin = new Array(prices.length);
    if(prices.length > 0){
        prefixMin[0] = prices[0];
    }
    for(let i=1; i<prices.length; i++) {
        prefixMin[i] = Math.min(prefixMin[i-1], prices[i]);
    }

    let maxProfit = 0;
    let maxCarry = prices[prices.length-1];

    for(let i = prices.length-1; i >= 0; i--) {
        maxProfit = Math.max(maxProfit, maxCarry - prefixMin[i]);
        maxCarry = Math.max(maxCarry, prices[i]);
    }

    return maxProfit;
}

export {bestTimeToBuyAndSellStocks};



/* Q4. Best Time to Buy and Sell Stocks I
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Say you have an array, A, for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Return the maximum possible profit.



Problem Constraints
0 <= len(A) <= 7e5
1 <= A[i] <= 1e7



Input Format
The first and the only argument is an array of integers, A.


Output Format
Return an integer, representing the maximum possible profit.


Example Input
Input 1:
A = [1, 2]
Input 2:

A = [1, 4, 5, 2, 4]


Example Output
Output 1:
1
Output 2:

4


Example Explanation
Explanation 1:
Buy the stock on day 0, and sell it on day 1.
Explanation 2:

Buy the stock on day 0, and sell it on day 2.

*/
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
      prices.sort((a, b) => a - b);   // sort ascending
    let sum = prices[0] + prices[1];  // cheapest two chocolates
    
    if (sum <= money) {
        return money - sum;  // leftover after buying
    } else {
        return money;   // not enough money, return all
    }
};
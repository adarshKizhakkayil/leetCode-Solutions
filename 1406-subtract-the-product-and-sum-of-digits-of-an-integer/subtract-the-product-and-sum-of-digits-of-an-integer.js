/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
   let arr =  n.toString().split('')
   let sum=0
   let prod = 1
   for(let i =0;i<arr.length;i++){
    sum =sum+Number(arr[i])
    prod *= arr[i]
   }
   
   return prod - sum
};
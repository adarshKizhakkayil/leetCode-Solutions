/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(arr, original) {
    let val = original
    let nums= arr.sort((a,b)=>a-b)
    for(let i= 0 ;i<nums.length;i++){
        if(nums[i]==val){
            val=val*2
        }
    }
    return val
};
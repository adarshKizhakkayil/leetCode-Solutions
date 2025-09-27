/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count = 0;
    let need = new Set(); 
    
    for (let i = 1; i <= k; i++) {
        need.add(i);
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        count++;
        if (need.has(nums[i])) {
            need.delete(nums[i]); 
        }
        if (need.size === 0) { 
            return count;
        }
    }
    
    return count;
};
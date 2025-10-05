var maxScoreIndices = function (nums) {
    const zeroesPref = [nums[0] === 0 ? 1 : 0], onecePost = Array(nums.length).fill(0);
    onecePost[onecePost.length - 1] = nums[nums.length - 1];

    for (let i = 1; i < nums.length; i++)zeroesPref[i] = zeroesPref[i - 1] + (nums[i] === 0 ? 1 : 0);

    for (let i = nums.length - 2; i >= 0; i--)onecePost[i] = onecePost[i + 1] + nums[i];

    const countZeroes = (i) => {
        if (i === 0) return 0;
        return zeroesPref[i - 1];
    }

    const countOnes = (i) => {
        if (i === nums.length) return 0;
        return onecePost[i];
    }

    let sum = Number.MIN_SAFE_INTEGER, resultMap = [], maxS;
    for (let i = 0; i <= nums.length; i++) {
        const newSum = countZeroes(i) + countOnes(i);
        sum = Math.max(sum, newSum);
        if (resultMap[newSum]) resultMap[newSum].push(i);
        else { resultMap[newSum] = [i]; }
    }
    return resultMap[sum];
};
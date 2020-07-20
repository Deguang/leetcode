/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} _nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  _nums = nums.sort((a,b) => a-b);
    let res = [],
        len = _nums.length,
        maxIndex = len - 1,
        maxTwoCount = res[maxIndex] + res[len - 2];

    // if (_nums[0] > 0) return res;
    for (let i = 0; i <= len - 3; i ++) {
      let numi = _nums[i];
      if (i > 0 && numi == _nums[i-1]) continue;
      let twoCount = 0 - numi;
      if (twoCount > maxTwoCount) continue;

      let j = i + 1,
          k = maxIndex;
      while (j < k) {
        let tSum = _nums[j] + _nums[k]
        if (tSum === twoCount) {
          res.push([numi, _nums[j], _nums[k]]);
          while(++j < k && _nums[j] == _nums[j - 1]){}
          while(--k > j && _nums[k] == _nums[k + 1]){}
        } else if (tSum > twoCount) {
          k --;
        } else {
          j ++
        }
      }
    }
    return res
};
// @lc code=end


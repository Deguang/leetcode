/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let memory = {};
  for (var i = 0; i < nums.length; i ++) {
    if (memory[target - nums[i]] >= 0) {
      return [memory[target - nums[i]], i];
    } else {
      memory[nums[i]] = i
    }
  }
};
// @lc code=end


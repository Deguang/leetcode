/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // 思路1 差值计算
  // const len = nums.length
  // let sum = (len+1) * len / 2;

  // for (let i = 0; i < len; i++) {
  //   sum -= nums[i];
  // }
  // return sum;
  
  // 思路2 异或
  let res = 0, i = 0;
  for (i = 0; i < nums.length; i++) {
    res = res^i^nums[i];
  }
  return res^i;
};
// @lc code=end


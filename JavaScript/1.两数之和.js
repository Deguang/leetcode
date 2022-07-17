/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {},
        cur = undefined,
        diff = undefined,
        len = nums.length
    for (let i = 0; i < len; i++) {
        cur = nums[i];
        diff = target - cur;
        if (map[diff] !== undefined) {
            return [map[diff], i];
        } else {
            map[cur] = i;
        }
    }
};
// @lc code=end

/**
 * 把每个数字的下标存储到map中，每次判断 target - nums[i] 是否在数组里，在的话就返回
 */

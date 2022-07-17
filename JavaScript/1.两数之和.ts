/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let hash: {[index: number]: number} = {},
        cur: number = NaN,
        diff: number = NaN;
    let len: number = nums.length;
    for (let i = 0; i < len; i++ ) {
        cur = nums[i];
        diff = target - cur
        if (hash[diff] !== undefined) {
            return [hash[diff], i]
        }
        hash[cur] = i
    }
    return []
};
// @lc code=end


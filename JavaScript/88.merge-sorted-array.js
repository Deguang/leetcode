/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let len = m + n;
  while (m > 0 && n > 0) {
    nums1[--len] = nums2[n - 1] >= nums1[m - 1] ? nums2[--n] : nums1[--m]
  }
  if (n > 0) {
    nums1.splice(0, n, ...nums2.slice(0, n))
  }
};
// @lc code=end


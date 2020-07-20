/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var len1 = nums1.length,
      len2 = nums2.length,
      cLen = len1 + len2,
      median = cLen % 2,
      res = [];

  if (len1 === 0 || len2 === 0) {
    res = len1 === 0 ? nums2 : nums1;
    return !median ? (res[res.length/2 - 1] + res[res.length/2]) /2 : res[(res.length + 1) / 2 -1]
  }

  while (res.length !== Math.floor(cLen / 2 + 1)) {
    if (nums2[0] === undefined || nums1[0] <= nums2[0]) {
      res.push(nums1.shift())
    } else {
      res.push(nums2.shift())
    }
  }
  return !median ? (res[(res.length - 1)] + res[res.length - 2]) / 2 : res[res.length - 1]
};
// @lc code=end


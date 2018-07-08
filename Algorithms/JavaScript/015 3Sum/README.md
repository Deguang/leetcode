Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

# solution 1:
use two-sum solution, find out the solution for a number as the target(0-number) of two-sum, if yes, return result, if not, return;

brute force solution will get error with _TIMEOUT_


算法精妙，减少循环、减少非必要操作，避免重复，降低时间复杂度，提升代码性能。 参考 https://zhuanlan.zhihu.com/p/24681450
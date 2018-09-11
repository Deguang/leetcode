/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort(function(a, b) {
        return a - b;
    });

    let len = nums.length,
        res = 0,
        min = Infinity;
    for(var i = 0; i < len - 2; i++) {
       var curr = nums[i],
            m = i + 1,
            n = len - 1;
        while (m < n) {
            var tem = Math.abs(nums[m] + nums[n] + curr - target);
            if(tem < min) {
                min = tem;
                res = nums[m] + nums[n] + curr;
            }

            if(nums[m] + nums[n] + curr < target) {
                m ++;
            } else {
                n --;
            }
        }
    }
    return res;
};
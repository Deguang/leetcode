/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let _nums = nums.sort(),
        len = _nums.length,
        result = [];

    for(let i = 0; i < len; i++) {
        let target = 0 - _nums[i];
        for(let j = i + 1; j < len; j++) {
            for(let k = j + 1; k < len; k++) {
                if(target === (_nums[j] + _nums[k])) {
                    result.push([_nums[i], _nums[j], _nums[k]])
                }
            }
        }
    }

    console.log(result)

    let hash = {},
        _result = [];
    for(let l = 0, llen = result.length; l < llen; l ++) {
        if(!hash[result[l]]) {
            _result.push(result[l]);
            hash[result[l]] = true;
        }
    }
    console.log(_result)
    return _result;
};

threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);
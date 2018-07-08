/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort(function(a,b) {return a-b});
    let len = nums.length,
        result = [],
        lastItem = nums[len-1],
        lastSecondItem = nums[len-2],
        bigestTwoSum = lastItem + lastSecondItem;

    for(let i = 0; i < len-2; i++) {
        if(i > 0 &&nums[i] == nums[i -1]) continue;
        if(nums[i] > 0) break;

        let target = 0 - nums[i];

        if(target > bigestTwoSum) continue;
    //      ALWAYS TIMEOUT
    //     let mid;
    //     for(let _i = i + 1; _i < len; _i++) {
    //         if(nums[_i] == target/2) {
    //             mid = _i;
    //             break
    //         }
    //         if(nums[_i] > target/2) {
    //             mid = _i -1
    //             break;
    //         }
    //     }

    //     for(let j = i + 1; j <= mid; j++) {
    //         if( j > i + 1 && nums[j] == nums[j-1]) continue;
    //         for(let k = mid+1; k < len; k ++) {
    //             if( k > mid+1 && nums[k] == nums[k-1]) continue;
    //             if (nums[j] + nums[k] == target) {
    //                 result.push([nums[i], nums[j],nums[k]]);
    //             }
    //         }
    //     }

        let j = i + 1,
            k = len - 1;
        while(j < k) {
            let sum = nums[j] + nums[k];
            if(target == sum) {
                result.push([nums[i], nums[j], nums[k]]);
                while(++j < k && nums[j] == nums[j-1]);
                while(--k >j && nums[k] == nums[k+1]);
            } else if(target > sum) {
                j++
            } else {
                k--;
            }
        }

    }

    console.log(result)
    return result;
};

// threeSum([-2,0,0,2,2])
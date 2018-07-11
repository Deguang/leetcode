/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxArea = 0,
        len = height.length;
    // Solution 1
    // TIME LIMIT EXCEEDED 
    // for(var i = 0; i < len; i ++) {
    //     for(var j = i + 1; j < len; j ++) {
    //         maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j -i))
    //     }
    // }
    // solution 2
    var left = 0, right = len - 1;
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if(height[left] < height[right]) {
            left ++;
        } else {
            right --;
        }
    }
    return maxArea;
};
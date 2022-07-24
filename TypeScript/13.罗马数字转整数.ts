/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
    const hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let num = 0
    for (let i = 0; i < s.length; i++) {
        if (!s[i + 1] || hash[s[i]] >= hash[s[i + 1]]) {
            num += hash[s[i]]
        } else {
            num -= hash[s[i]]
        }
    }
    return num;
};
// @lc code=end


/*
自左向右，若不小于右侧数字，则累加，反之 减去
*/

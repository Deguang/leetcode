/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    if (x == 0) return true
    if (x % 10 === 0) return false
    // // 字符串暴力
    // let str: string = x + '',
    //     len = str.length,
    //     half = len / 2;
    // for (let i = 0; i < half; i++) {
    //     if (str[i] != str[len - 1 - i]) {
    //         return false
    //     }
    // }
    // return true
    // 数字方案
    let y = x
    let num = 0
    while (y != 0) {
        num = num * 10 + y % 10
        y = Math.floor(y / 10)
    }
    return num === x
};
// @lc code=end

/*
### 思路：
先排除基本的 负数 0 10的倍数等
- 暴力方法
    左右对比向内逼近，本质是字符串比较每一位，需要判断长度为奇数 偶数的不同情况
    ```
    let str: string = x + '',
        len = str.length,
        half = len / 2;
    for (let i = 0; i < half; i++) {
        if (str[i] != str[len - 1 - i]) {
            return false
        }
    }
    ```
- 数字方案
    用取模的方式反转数字
*/

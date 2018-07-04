/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    for (var i = len; i > 1; i --) {
        for (var j = 0; j <= len - i + 1; j ++) {
            var subStr = s.substring(j, j + i - 1),
                count = 0,
                subLen = Math.floor(subStr.length / 2);
            for(var k = 0; k <= subLen; k++) {
                if(subStr[k] === subStr[subLen - k - 1]) {
                    count++;
                    if(count === subLen) {
                        return subStr;
                    }
                } else {
                    break
                }
            }
        }
    }
};

longestPalindrome('1232167');
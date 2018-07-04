/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    if (len === 1) return s;
    for (var i = len; i >= 1; i --) {
        for (var j = 0; j <= len - i; j ++) {
            var subStr = s.substr(j, i),
                count = 0,
                subLen = Math.floor(i / 2);
            if(i === 1) {
                return subStr
            }
            for(var k = 0; k <= subLen; k++) {
                if(subStr[k] === subStr[i - k - 1]) {
                    count++;
                    if(count === subLen) {
                        console.log(subStr)
                        return subStr;
                    }
                } else {
                    break
                }
            }
        }
    }
};

longestPalindrome("abcda");
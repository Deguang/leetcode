/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let lenArr = strs.map(str => str.length).sort((a,b) => a > b);
    const minLen = lenArr[0];
    if (minLen === 0) return '';
    let prefix = '';

    for(var i = 0; i < minLen; i++) {
        for(var j = 0; j < strs.length - 1; j++) {
            if(strs[j][i] !== strs[j+1][i]) {
                prefix += strs[0].substr(0, i);
                return prefix;
            }
        }
    }
    return strs[0].substr(0, minLen);
};
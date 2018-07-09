/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var res = parseInt(str),
        INT_MAX = 2147483647,
        INT_MIN = -2147483648;
    if(res > INT_MAX) {
        return INT_MAX;
    }
    if(res < INT_MIN) {
        return INT_MIN;
    }
    return isNaN(res) ? 0 : res;
}
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const ROMAN_HASH = {
        'M':1000,
        'CM':900,
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        "XL":40,
        'X':10,
        "IX":9,
        'V':5,
        'IV':4,
        'I':1
    };
    let sArr = s.split('');
    let resArr = [];
    while(sArr.length) {
        if(ROMAN_HASH[sArr[0] + sArr[1]]) {
            resArr.push(ROMAN_HASH[sArr.splice(0,2).join('')]);
        } else {
            resArr.push(ROMAN_HASH[sArr.splice(0,1)]);
        }
    }
    return resArr.reduce((count, current) => count + current);
};

console.log(romanToInt('IV'))

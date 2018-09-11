/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];
    const digitMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p','q','r','s'],
        8: ['t', 'u', 'v'],
        9: ['w','x','y','z']
    }
    

    const arr = digits.split('');
    let resLen = 1;
    arr.forEach(item => {
        resLen *= digitMap[item].length;
    })
    let res = Array.apply(null, Array(resLen)).map(() => '');
    let time = resLen;

    arr.forEach(item => {
        time /= digitMap[item].length;
        res = res.map((_item, _index) => {
            return _item + digitMap[item][Math.ceil((_index + 1)/time - 1) % digitMap[item].length]
        })
    })
    console.log(res)
    return res
};

letterCombinations('234')
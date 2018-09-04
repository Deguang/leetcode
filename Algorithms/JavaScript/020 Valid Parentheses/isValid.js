/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [],
        arr = s.split(''),
        map = {
            '{': '}',
            '[': ']',
            '(': ')'
        };

    arr.forEach(item => {
        let len = stack.length;
        if(len && ( map[item] === stack[len - 1] || item === map[stack[len - 1]] )) {
            stack.pop()
        } else {
            stack.push(item)
        }
    })
    console.log(stack)
    return !stack.length;
};

console.log(isValid('([)]'))
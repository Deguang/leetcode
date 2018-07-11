/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    console.log('s:' ,s, ', p:', p)

    if(!p.length) return !s.length;

    var firstMatch = !!s.length && (s.charAt(0) == p.charAt(0) || p.charAt(0) == '.');
    if(p.length >= 2 && p.charAt(1) == '*') {

        return (isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p)));
    } else {

        return firstMatch && isMatch(s.substring(1), p.substring(1));
    }
};

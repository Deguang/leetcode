/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var arr = (''+num).split(''),
        len = arr.length;
    var res = arr.map(function(item, i) {
        switch(len - i) {
            case 4:
                return Array.apply(null ,{length: arr[i]}).map(function() {
                    return 'M'
                }).join('');
                break;
            case 3:
                if(item == 9) {
                    return 'CM'
                } else if(item > 4) {
                    return 'D' + Array.apply(null ,{length: arr[i] - 5}).map(function() {
                        return 'C'
                    }).join('')
                } else if(item == 4) {
                    return 'CD'
                } else {
                    return Array.apply(null ,{length: arr[i]}).map(function() {
                        return 'C'
                    }).join('')
                }
                break;
            case 2:
                if(item == 9) {
                    return 'XC';
                } else if(item > 4) {
                    return 'L' + Array.apply(null ,{length: arr[i] - 5}).map(function() {
                        return 'X'
                    }).join('')
                } else if(item == 4) {
                    return 'XL';
                } else {
                    return Array.apply(null ,{length: arr[i]}).map(function() {
                        return 'X'
                    }).join('')
                }
                break;
            case 1:
                if(item == 9) {
                    return 'IX'
                } else if(item > 4) {
                    return 'V' + Array.apply(null ,{length: arr[i] - 5}).map(function() {
                        return 'I'
                    }).join('')
                } else if(item == 4) {
                    return 'IV'
                } else {
                    return Array.apply(null ,{length: arr[i]}).map(function() {
                        return 'I'
                    }).join('')
                }
                break;
            default:
                return '';
        }
    })

    return res.join('');
};


/** solution 2
 * @param {number} num
 * @return {string}
 */
var intToRoman2 = function(num) {
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
    var roman = '';
    Object.keys(ROMAN_HASH).map(function(key) {
        var keyNum = ROMAN_HASH[key];
        while(num >= keyNum) {
            roman += key;
            num -= keyNum;
        }
    })
    return roman;
}
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var arr = num.split(''),
        len = arr.length;
    var res = arr.map(function(item, i) {
        switch(len - i + 1) {
            case 4:
                return Array.prototype.map.call({length: item}, function(item, i) {
                    return 'M'
                }).join();
                break;
            case 3:
                if(item === 9) {
                    return 'CM'
                } else if(item > 4) {
                    return 
                } else if(item == 4) {
                    return 'CD'
                } else {

                }
                break;
            case 2:
                if(item === 9) {
                    return 'XC';
                } else if(item > 4) {
                    return 
                } else if(item == 4) {
                    return 'XL';
                } else {

                }
                break;
            case 1:
                if(item === 9) {
                    return 'IX'
                } else if(item > 4) {
                    return 
                } else if(item == 4) {
                    return 'IV'
                } else {

                }
                break;
            default:
                return '';
        }
    })

    return res.join();
};
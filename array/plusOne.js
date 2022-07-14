/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let sum = digits[digits.length - 1] + 1;
    let carry = Math.floor(sum / 10);
    let num = sum % 10
    for (let i = digits.length - 1; i >= 0; i--) {
        if (carry === 0) {
            digits[i] = num;
            console.log(digits)
            return digits
        }
        else {
            digits[i] = num;
            if (i - 1 >= 0) {
                sum = digits[i - 1] + carry
                carry = Math.floor(sum / 10);
                num = sum % 10
            }
        }
    }
    if (carry !== 0) {
        digits.unshift(1)
    }
    return digits
};

plusOne([8,9,9,9])
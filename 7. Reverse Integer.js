// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
    str = Math.abs(x) + ''
    arr = str.split('')
    let newArr =[]
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[arr.length - i - 1]
    }
    let newNum = newArr.join('') 
    if (newNum > Math.pow(2, 31) - 1 || newNum < -Math.pow(2, 31)) return 0;
    if(x < 0) return 0 - newNum
    else return newNum
};

console.log(reverse(1534236469))
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

var missingNumber = function(nums) {
    let arr =[]
    arr= nums.sort()
    for(let i=0 ; i<arr.length; i++){
        if(arr[i] != i) return i
        // console.log(arr[i])
        // return arr.indexOf(i) == -1? i : 0
    }
    // return arr.indexOf('X')
};


console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
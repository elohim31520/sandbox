// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0


var searchInsert = function(nums, target) {
    let end = nums.length - 1
    let start = 0
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(target > nums[mid]){
            start = mid + 1
        }
        else if(target == nums[mid]) return mid
        else{
            end = mid - 1
        }
    }
    return start
};

// console.log(searchInsert([2,3,5,6], 4))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([0,55,58,90,100,126], 78))
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 7))
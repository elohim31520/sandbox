/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

let twoSum = function(nums, target) {
    nums.forEach((el,i)=>{
        nums.forEach((item,j)=>{
            if( el!= item) {
                if(el + item == target){
                    
                }
            }
        })
    })
};


console.log(twoSum([1,2,3,4,5],4))
console.log(twoSum([1,2,3,4,5],4))
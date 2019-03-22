/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let Target = 0;
    nums.sort((a,b)=> a-b);
    // console.log(nums)
    if( nums.length >= 2){
        for (let index = 0; index < nums.length - 1 ; index++) {
            let MsthNumber = nums[index + 1] - nums[index]
        //    console.log(MsthNumber, nums[index + 1] , nums[index])
            if(MsthNumber > Target) Target = MsthNumber;
        }
    } 
    
    return Target;
};

console.log(maximumGap([1,3,100]))
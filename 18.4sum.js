/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

    注意：

    答案中不可以包含重复的四元组。

    示例：

    给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

    满足要求的四元组集合为：
    [
    [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]
    ]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/4sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 2個迴圈 + 雙指針
var fourSum = function(nums, target) {
    let len = nums.length
    if(len < 4) return []
    nums.sort((a ,b)=> a - b)
    // console.log(nums)
    let answ = []
    for (let i = 0; i < len - 3; i++) {
        // if(nums[i] == 0 && nums[i + 1] == 0 && nums[i + 2] ==0 && nums[i + 3] == 0) answ.push([0,0,0,0])
        // if(nums[i] == nums[i - 1]) continue
        // if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] == target){
        //     answ.push([nums[i] , nums[i + 1] , nums[i + 2] , nums[i + 3]])
        //     continue
        // }
        if (i > 0 && nums[i] == nums[i - 1]) continue //關鍵去重
        if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
        if(nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue
        for (let j = i + 1; j < len - 2; j++) {
            let left = j + 1
            let right = len - 1
            if(j - i > 1 && nums[j] == nums[j - 1]) continue //關鍵去重
            while(left < right){
                // console.log(left ,right)
                // console.log(nums[i] , nums[j] , nums[left] , nums[right])
                let temp = (nums[i] + nums[j] + nums[left] + nums[right])
                if(target == temp){
                    answ.push([nums[i] , nums[j] , nums[left] , nums[right]])
                    left ++
                }
                if(target > temp){
                    left ++
                    while(nums[left] == nums[left - 1] ){
                        left ++
                    }
                }
                else{
                    right --
                    while(nums[right] == nums[right + 1]){
                        right --
                    }
                }
            }
        }
    }
    return answ
}

// console.log(fourSum([1, 0, -1, 0, -2 ,-2 ,0, 2 ,4] , 0))
// console.log(fourSum([2,4,0,4,-3,-3] , 0))
console.log(fourSum([0,0,0,0,0,0] , 0))
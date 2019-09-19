/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

    注意：答案中不可以包含重复的三元组。

    例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/3sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 *  解法 : 先将数组进行排序
    从左侧开始，选定一个值为 定值 ，右侧进行求解，获取与其相加为 0 的两个值
    类似于快排，定义首和尾
    首尾与 定值 相加
 *  */ 
var threeSum = function(nums) {
    nums.sort((a ,b) => a - b)
    let answ = []
    for (let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) break
        if(nums[i] == nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum == 0) answ.push([nums[i] , nums[left] , nums[right]])
            if(sum <= 0) {
                left+=1
                while(nums[left] == nums[left - 1]) {
                    left ++
                }
            }
            else {
                right -=1
                while(nums[right] == nums[right + 1]) {
                    right --
                }
            }
        }
    }
    return answ
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,4,6,6]))

/**
 * expect
 * 满足要求的三元组集合为：
    [
        [-1, 0, 1],
        [-1, -1, 2]
    ]
 */

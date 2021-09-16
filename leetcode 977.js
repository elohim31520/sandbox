/**
 * 977.有序数组的平方
    力扣题目链接

    给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

    示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]

    示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]
 */

function squareAndSort (nums){
    const last = nums.length -1
    let k = last
    let res  = new Array(nums.length)
    for (let i = 0, j = last; i<= j;) {
        let left = nums[i] * nums[i]
        let right = nums[j] * nums[j]
        if(left > right){
            res[k] = left
            i++
        }
        else{
            res[k] = right
            j--
        }
        k--
    }
    return res
}

console.log(squareAndSort([-7,-3,2,3,11]))
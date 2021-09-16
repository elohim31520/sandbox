/**
 * 53. 最大子序和
    题目地址：https://leetcode-cn.com/problems/maximum-subarray/

    给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

    示例: 输入: [-2,1,-3,4,-1,2,1,-5,4] 输出: 6 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

function maxSubArray (nums){
    let res = 0
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        temp += nums[i] 
        if(temp > res) res = temp
        if(temp <= 0) temp = 0
    }
    return res
}

console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4] ));
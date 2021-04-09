/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function permute(nums){
    let result = []
    dfs(nums ,[] ,result)
    return result
}

function dfs(nums ,path ,result){
    if(path.length == nums.length) {
        result.push(path.slice())
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if(path.includes(nums[i])) continue
        path.push(nums[i])
        dfs(nums ,path ,result)
        path.pop()
    }
}

console.log(permute([1,2,3]));
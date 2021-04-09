/**
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

function permute(nums){
    let result = []
    let used = new Array(nums.length).fill(false)
    dfs(nums,[] ,result ,used)
    return result
}

function dfs(nums ,path ,result ,used){
    if(path.length == nums.length) {
        result.push(path.slice())
        return
    }
    for (let i = 0; i < nums.length; i++) {
        // 剪枝
        if(used[i] || (i > 0 && !used[i - 1] && nums[i] == nums[i - 1])) continue
        path.push(nums[i])
        used[i] = true
        dfs(nums ,path ,result ,used)
        // 回碩
        used[i] = false
        path.pop()
    }
}

console.log(permute([1,1,2]));
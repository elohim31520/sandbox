/**
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combinations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

function permute(n ,k){
    let result = []
    dfs(n ,k ,1 ,[] ,result)
    return result
}

function dfs(n ,k ,start ,path ,result){
    if(path.length == k){
        result.push(path.slice())
        return
    }
    for (let i = start; i < n + 1; i++) {
        path.push(i)
        dfs(n ,k ,i+1 ,path ,result)
        path.pop()
    }
}


console.log(permute(4,2));
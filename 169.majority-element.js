/**
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

    你可以假设数组是非空的，并且给定的数组总是存在众数。

    示例 1:

    输入: [3,2,3]
    输出: 3
    示例 2:

    输入: [2,2,1,1,1,2,2]
    输出: 2

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/majority-element
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解
var majorityElement = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) map[nums[i]] = 0
        map[nums[i]] += 1
        
    }
    for (const key in map) {
        if (map.hasOwnProperty(key)) {
            if(map[key] > nums.length / 2) return key 
        }
    }
    return -1
};

console.log(majorityElement([0,1,1]))
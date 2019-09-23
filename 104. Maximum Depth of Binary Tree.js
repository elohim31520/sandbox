/**
 * 给定一个二叉树，找出其最大深度。

    二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

    说明: 叶子节点是指没有子节点的节点。

    示例：
    给定二叉树 [3,9,20,null,null,15,7]，

     3
    / \
   9  20
   /  \
  15   7
    返回它的最大深度 3 。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
class Node{
   constructor(data){
      this.data = data
      this.left = this.right = null
   }
   show(){
      console.log(this.data)
   }
}

let arr = [3,9,20,null,null,15,7]
for (let i = 0; i < arr.length; i++) {
   new Node(i)
}

var maxDepth = function(root) {
      if(!root) return 0
      else{
         let left = maxDepth(root.left)
         let right = maxDepth(root.right)
         return Math.max(left ,right) + 1
      }
};

console.log(maxDepth(t))
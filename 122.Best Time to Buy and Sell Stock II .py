# 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
# 示例 1: 输入: [7,1,5,3,6,4] 输出: 7

class Solution:
    def maxProfit (self ,prices:list[int]) -> int:
        result = 0
        for i in range(1 ,len(prices)):
            result += max(prices[i] - prices[i - 1] ,0)
        return result

solution = Solution()

print(solution.maxProfit([7,1,5,3,6,4]))
print(solution.maxProfit([7,1,5,10,3,6,4]))
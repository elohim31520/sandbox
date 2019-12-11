class Solution:
    def singleNumber(self, nums):
        if len(nums) == 0 :
            return []
        obj = {}
        for num in nums:
            if not(num in obj):
                obj[num] = 0
            else:
                obj[num] += 1
        print(obj)
        ans = []
        for k in obj:
            if obj[k] == 0:
                ans.append(k)
        return ans

a = Solution()
print(a.singleNumber([1,2,1,3,2,5]))

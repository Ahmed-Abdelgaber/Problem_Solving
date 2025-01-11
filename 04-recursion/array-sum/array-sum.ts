const arraySum = (nums: number[]): number =>
  nums.length === 0 ? 0 : nums[0] + arraySum(nums.slice(1));

export default arraySum;

// [1, 2, 3, 4, 5]
// 1 + arraySum([2, 3, 4, 5])
// 1 + 2 + arraySum([3, 4, 5])
// 1 + 2 + 3 + arraySum([4, 5])
// 1 + 2 + 3 + 4 + arraySum([5])
// 1 + 2 + 3 + 4 + 5 + arraySum([])
// 1 + 2 + 3 + 4 + 5 + 0

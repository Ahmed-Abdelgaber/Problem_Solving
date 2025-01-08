const findMissingNumber = (nums: number[]): number | undefined => {
  // Using the formula to find the missing number
  if (nums.length === 0) return 1;
  const numsSum = nums.reduce((acc, num) => acc + num, 0);
  const n = nums.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  return expectedSum - numsSum ? expectedSum - numsSum : undefined;
  // Using Set instead of reduce
  //   if (nums.length === 0) return 1;
  //   const numsSet = new Set(nums);
  //   const normalNumsSet = new Set([
  //     ...Array.from({ length: nums.length + 1 }, (_, i) => i + 1),
  //   ]);
  //   const missingNumber = [...normalNumsSet.difference(numsSet)][0];
  //   return missingNumber ? missingNumber : undefined;
};

export default findMissingNumber;

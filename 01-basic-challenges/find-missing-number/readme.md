# Challenge: Find The Missing Number

## Instructions

Write a function called `findMissingNumber` that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

### Function Signature

```js
/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(arr: number[]): number;
```

### Examples

```js
findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5
findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]); // 9
findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]); // 7
```

### Constraints

- If an empty array is passed in, it should return `1`
- If nothing is passed in, it should return `undefined`

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```ts
const findMissingNumber = (nums: number[]): number | undefined => {
  if (nums.length === 0) return 1;
  const numsSum = nums.reduce((acc, num) => acc + num, 0);
  const n = nums.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  return expectedSum - numsSum ? expectedSum - numsSum : undefined;
};
```

### Explanation

- Use reduce function to sum the the numbers in the given array.
- Use the formula to get the expected sum of the numbers.
- Subtract them to get the missing number.

</details>

<details>
  <summary>Click For Solution 2</summary>

```ts
const findMissingNumber = (nums: number[]): number | undefined => {
  if (nums.length === 0) return 1;
  const numsSet = new Set(nums);
  const normalNumsSet = new Set([
    ...Array.from({ length: nums.length + 1 }, (_, i) => i + 1),
  ]);
  const missingNumber = [...normalNumsSet.difference(numsSet)][0];
  return missingNumber ? missingNumber : undefined;
};
```

### Explanation

- This solutions is using Set instead of reduce.
- It uses the `Set.prototype.difference` function to get difference between the nums array as a Set and the normal numbers array as a Set.
- This solution is not very optimal because it requires more memory and maybe time for large arrays to store and manipulate the Sets but on the other hand it avoid the overflow problem in case it happened (overflow scenario is not likely happening in real cases)

</details>

### Test Cases

```ts
test('Finding the missing number', () => {
  expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
  expect(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
  expect(findMissingNumber([1, 3, 4, 5, 6])).toBe(2);
});
```

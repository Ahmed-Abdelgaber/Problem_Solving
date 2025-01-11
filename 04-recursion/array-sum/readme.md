# Challenge: Array Sum Using Recursion

## Description

Let's practice using recursion by creating a function that calculates the sum of an array of numbers. Write a function called `arraySum` that takes in an array of numbers and returns their sum using recursion.

## Instructions

Write a function called `arraySum` that takes in an array of numbers and returns their sum using recursion.

### Function Signature

```js
/**
 * Calculates the sum of an array of numbers using recursion.
 * @param {Array} arr - The array of numbers.
 * @returns {number} - The sum of the numbers.
 */
function arraySum(arr: Array): number;
```

### Constraints

- The input array can contain positive and/or negative integers.

### Examples

```js
arraySum([1, 2, 3, 4, 5]); // should return 15 (1 + 2 + 3 + 4 + 5 = 15)
arraySum([-1, -2, -3, -4, -5]); // should return -15 (-1 + -2 + -3 + -4 + -5 = -15)
arraySum([]); // should return 0 (empty array)
```

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
const arraySum = (nums: number[]): number =>
  nums.length === 0 ? 0 : nums[0] + arraySum(nums.slice(1));
```

### Explanation

- `arraySum([1, 2, 3, 4, 5])` returns 1 + arraySum([2, 3, 4, 5])
- `arraySum([2, 3, 4, 5])` returns 2 + arraySum([3, 4, 5])
- `arraySum([3, 4, 5])` returns 3 + arraySum([4, 5])
- `arraySum([4, 5])` returns 4 + arraySum([5])
- `arraySum([5])` returns 5 + arraySum([])
- `arraySum([])` reaches the base case and returns 0

```javascript
// [1, 2, 3, 4, 5]
// 1 + arraySum([2, 3, 4, 5])
// 1 + 2 + arraySum([3, 4, 5])
// 1 + 2 + 3 + arraySum([4, 5])
// 1 + 2 + 3 + 4 + arraySum([5])
// 1 + 2 + 3 + 4 + 5 + arraySum([])
// 1 + 2 + 3 + 4 + 5 + 0
```

</details>

### Test Cases

```js
test('Calculate Sum of Array Using Recursion', () => {
  expect(arraySum([1, 2, 3, 4, 5])).toEqual(15);
  expect(arraySum([-1, -2, -3, -4, -5])).toEqual(-15);
  expect(arraySum([])).toEqual(0);
});
```

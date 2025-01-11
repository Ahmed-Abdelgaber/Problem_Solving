# Challenge: Number Range Using Recursion

## Instructions

Write a function called `numberRange` that takes in a `startNum` and an `endNum` and returns an array of numbers from `startNum` to `endNum`, inclusive. Be sure to use recursion in your solution.

### Function Signature

```js
/**
 * Returns an array of numbers from startNum to endNum, inclusive.
 * @param {number} startNum - The starting number.
 * @param {number} endNum - The ending number.
 * @returns {number[]} - An array of numbers.
 */
function numberRange(startNum: number, endNum: number): number[];
```

### Examples

```js
numberRange(1, 5); // should return [1, 2, 3, 4, 5]
numberRange(3, 10); // should return [3, 4, 5, 6, 7, 8, 9, 10]
numberRange(7, 7); // should return [7] (only one number)
```

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
const numberRange = (startNum: number, endNum: number): number[] =>
  startNum === endNum
    ? [startNum]
    : [startNum, ...numberRange(startNum + 1, endNum)];
```

### Explanation

```javascript
// Example usage:
// startNum = 1, endNum = 5
// [1, ...numberRange(2, 5)]
// [1, 2, ...numberRange(3, 5)]
// [1, 2, 3, ...numberRange(4, 5)]
// [1, 2, 3, 4, ...numberRange(5, 5)]
// [1, 2, 3, 4, 5]
```

</details>

### Test Cases

```js
test('Calculating the range of numbers', () => {
  expect(numberRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(numberRange(3, 10)).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  expect(numberRange(7, 7)).toEqual([7]);
});
```

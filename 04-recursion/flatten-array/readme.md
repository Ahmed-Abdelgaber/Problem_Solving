# Challenge: Flatten Array

## Instructions

Write a function called `flattenArray` that takes in an array containing nested arrays of integers and returns a new array with all the integers from the nested arrays flattened into a single level.

### Function Signature

```js
/**
 * Returns a flattened array.
 * @param {number[]} arr - The array containing nested arrays.
 * @returns {number[]} - The flattened array.
 */
function flattenArray(arr: number[]): number[];
```

### Examples

```js
flattenArray([1, [2, 3], [4, 5, [6]]]); // should return [1, 2, 3, 4, 5, 6]
flattenArray([
  [1, 2],
  [3, [4, 5]],
  [6, [7]],
]); // should return [1, 2, 3, 4, 5, 6, 7]
flattenArray([1, [2, [3, [4, [5]]]]]); // should return [1, 2, 3, 4, 5]
```

### Constraints

- The input array can contain nested arrays of any depth
- The input array can contain any number of nested arrays

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```js
type NestedArray = number | NestedArray[];

const flattenArray = (nums: NestedArray[]): number[] => {
  const result: number[] = [];

  for (const el of nums) {
    if (Array.isArray(el)) {
      result.push(...flattenArray(el));
    } else {
      result.push(el);
    }
  }

  return result;
};
```

### Explanation

- Create a variable `result` to store the flattened array.
- Loop through the input array using a `for...of` loop.
- If the current element is an array, recursively call the `flattenArray` function on that element to flatten it further, and then destruct the result to the `result` array.
- If the current element is not an array, push it to the `result` array.
- Return the `result` array.

The base case is implicitly handled within the loop structure. As the loop iterates through each element of the input array arr, the recursion eventually reaches the point where there are no more elements left to process.

When the input array arr is empty, the loop will not execute, and the function will directly return the empty result array.

</details>

<details>
  <summary>Click For Solution 2</summary>

```js
type NestedArray = number | NestedArray[];

// Using Array.prototype.reduce
const flattenArray = (nums: NestedArray[]): number[] => {
  return nums.reduce<number[]>((acc, el) => {
    if (Array.isArray(el)) {
      acc.push(...flattenArray(el));
    } else {
      acc.push(el);
    }
    return acc;
  }, []);
};
```

### Explanation

- Same logic as before but using `Array.prototype.reduce` to loop over the nums array.

</details>

### Test Cases

```js
test('Flatten Nested Arrays', () => {
  expect(flattenArray([1, [2, 3], [4, 5, [6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(
    flattenArray([
      [1, 2],
      [3, [4, 5]],
      [6, [7]],
    ])
  ).toEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(flattenArray([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
});
```

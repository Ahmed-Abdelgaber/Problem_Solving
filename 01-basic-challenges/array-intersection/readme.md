# Challenge: Array Intersection

## Instructions

Write a function called `arrayIntersection` that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

### Function Signature

```js
/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
function arrayIntersection(arr1: number[], arr2: number[]): number[];
```

### Examples

```js
arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]); // should return [1, 3, 5]
arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]); // should return []
arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]); // should return [1, 2, 3, 4, 5]
```

### Constraints

- The input arrays can contain any number of elements
- The input arrays can contain any positive integer

## Solutions

<details>
  <summary>Click For Solution 1</summary>

In this solution I will use the dynamic programming to store the first array in an object just to loop over it one time.

```ts
const arrayIntersection = (array1: number[], array2: number[]): number[] => {
  const objectOfArray1 = {};
  for (let num of array1) {
    objectOfArray1[num] = true;
  }
  return array2.filter(num => objectOfArray1[num]);
};
```

### Explanation

- Iterate through the first array and store it in an Object.
- Filter the second array to return the elements that will exists in the first array object.
- Return this array.

</details>

<details>
  <summary>Click For Solution 2</summary>

In this solution, I will use a Set. A Set is a data structure that stores unique values.

```ts
const arrayIntersection = (array1: number[], array2: number[]): number[] => {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  return [...set1.intersection(set2)];
};
```

### Explanation

- Create a new Set from the first and second arrays
- Use the intersection function to return a new Set.
- Destruct the returned Set into an array to return it.

</details>

### Test Cases

```js
test('Finding array intersection', () => {
  expect(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([
    3, 4, 5,
  ]);
  expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
  expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
});
```

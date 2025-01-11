# Power

## Instructions

Write a function called `power` that takes in a `base` and an `exponent` and returns the result of raising the `base` to the power of the `exponent`. Use recursion to solve this problem.

### Function Signature

```js
/**
 * Returns the result of raising the base to the power of the exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of the calculation.
 */
function power(base: number, exponent: number): number;
```

### Examples

```js
power(2, 3); // 8 (2^3 = 2 * 2 * 2 = 8)
power(5, 2); // 25 (5^2 = 5 * 5 = 25)
power(3, 4); // 81 (3^4 = 3 * 3 * 3 * 3 = 81)
```

### Constraints

- The base and exponent will always be positive integers

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
const power = (base: number, exponent: number): number =>
  exponent === 0 ? 1 : base * power(base, exponent - 1);
```

### Explanation

Let's us `power(2, 5)` it will be equal to the following:

```js
//base = 2, exponent = 5
// 2 * power(2, 4)
// 2 * 2 * power(2, 3)
// 2 * 2 * 2 * power(2, 2)
// 2 * 2 * 2 * 2 * power(2, 1)
// 2 * 2 * 2 * 2 * 2 * power(2, 0)
// 2 * 2 * 2 * 2 * 2 * 1
```

</details>

### Test Cases

```js
test('Calculate Power of Base to Exponent', () => {
  expect(power(2, 3)).toEqual(8);
  expect(power(5, 2)).toEqual(25);
  expect(power(3, 4)).toEqual(81);
});
```

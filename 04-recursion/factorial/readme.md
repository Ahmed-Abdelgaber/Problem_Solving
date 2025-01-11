# Challenge: Factorial Using Recursion

## Description

The factorial of a number/integer is the product of that number and all of the numbers below it. It is denoted as `5!` (factorial of 5).

```text
- 0! = 1
- 1! = 1
- 2! = 2 * 1 = 2
- 3! = 3 * 2 * 1 = 6
- 4! = 4 * 3 * 2  * 1 = 24
- 5! = 5 * 4 * 3 * 2 * 1 = 120
```

The factorial function is commonly used in various mathematical and programming applications. It grows very quickly as `n` increases, which makes it a suitable challenge for exploring recursive functions.

## Instructions

Write a function called `factorial` that takes in a number and returns the factorial of that number.

### Function Signature

```js
/**
 * Returns the factorial of a number.
 * @param {number} num - The number.
 * @returns {number} - The factorial of the number.
 */
function factorial(num: number): number;
```

### Constraints

- The input number will always be a positive integer

### Examples

```js
factorial(0); // 1
factorial(5); // 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
factorial(10); // 3628800 (10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800)
```

## Solutions

<details>
  <summary>Click For Solution </summary>

```js
const factorial = (num: number): number =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1);
```

</details>

### Test Cases

```js
describe('Factorial', () => {
  test('Factorial of 0 should be 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Factorial of 5 should be 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Factorial of 10 should be 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });
});
```

# Challenge: Find Missing Letter

## Instructions

Write a function called `findMissingLetter` that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

### Function Signature

```js
/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr: string[]): string;
```

### Examples

```js
findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
findMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"
```

### Constraints

- The input array will only contain letters in one case (lower or upper)
- If no letters are in the array, return an empty string

## Solutions

<details>
  <summary>Click For Solution 1 </summary>

```ts
const findMissingLetter = (chars: string[]): string => {
  if (chars.length === 0) return '';
  const sumOfGivenChars = chars.reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );
  const firstCharCode = chars[0].charCodeAt(0);
  const lastCharCode = chars[chars.length - 1].charCodeAt(0);
  const expectedSum =
    (lastCharCode * (lastCharCode + 1)) / 2 -
    ((firstCharCode - 1) * firstCharCode) / 2;
  return String.fromCharCode(expectedSum - sumOfGivenChars);
};
```

### Explanation

- Declare a variable `sumOfGivenChars` and assign it the sum of given chars ASCII code.
- Declare a variable `firstCharCode` and assigned it the ASCII code of the first letter.
- Declare a variable `lastCharCode` and assigned it the ASCII code of the last letter.
- The `expectedSum` will be the difference between sum from 1 to the first ASCII code and the sum from 1 to the last ASCII code.
- The result from subtracting the expected sum from the sum of the given characters will be the ASCII code of the missing character.

</details>

<details>
  <summary>Click For Solution 2 </summary>

```ts
const findMissingLetter = (chars: string[]): string => {
  if (chars.length === 0) return '';
  let start = chars[0].charCodeAt(0);
  for (const char of chars.slice(1)) {
    const current = char.charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return '';
};
```

### Explanation

- Declare a variable `start` and assigned it the ASCII code of the first letter of the input array.
- Loop through the input array and check if the ASCII code of the current letter minus the ASCII code of the previous letter is greater than 1.
- If it is, return the letter that is one greater than the previous letter.
- If we get to the end of the loop without returning anything, we return an empty string.

</details>

### Test Cases

```ts
test('Find Missing Letter', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'e'])).toBe('d');
  expect(findMissingLetter(['X', 'Z'])).toBe('Y');
  expect(findMissingLetter(['m', 'n', 'o', 'q', 'r'])).toBe('p');
  expect(findMissingLetter(['F', 'G', 'H', 'J'])).toBe('I');
});
```

# Challenge: Find First Non-Repeating Character

## Instructions

Write a function called `findFirstNonRepeatingCharacter` that takes in a string and returns the first non-repeating character in the string.

If there are no non-repeating characters, the function should return `null`.

### Function Signature

```js
/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str: string): string | null;
```

### Examples

```js
findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'
findFirstNonRepeatingCharacter('aabbcc'); // should return null
findFirstNonRepeatingCharacter('abcdef'); // should return 'a'
```

### Constraints

- The input string will only contain lowercase letters and spaces

## Solution

<details>
  <summary>Click For Solution</summary>

Using an object:

```ts
const findFirstNonRepeatingCharacter = (str: string): string | null => {
  const charsFrequencyObject: { [key: string]: number } = {};
  for (let char of str) {
    charsFrequencyObject[char] = charsFrequencyObject[char] + 1 || 1;
  }
  for (let char of str) {
    if (charsFrequencyObject[char] === 1) return char;
  }
  return null;
};
```

### Explanation

- Initialize an empty object to keep track of the number of times each character appears in the string.
- Iterate through the string and add each character to the object. If the character is already in the object, we increment its count by 1. If it isn't, we set its count to 1.
- Iterate through the string again and check the object to see if the current character has a count of 1. If it does, return it because it's the first non-repeating character.
- If we make it through the entire string without returning a character, we return null because there are no non-repeating characters.

</details>

### Test Cases

```ts
test('Find First Non-Repeating Character', () => {
  expect(findFirstNonRepeatingCharacter('aabccdeff')).toBe('b');
  expect(findFirstNonRepeatingCharacter('aabbcc')).toBe(null);
  expect(findFirstNonRepeatingCharacter('hello world')).toBe('h');
});
```

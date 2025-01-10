# Challenge: Reverse String Recursion

## Instructions

Write a function called `reverseString` that takes in a string and returns the reversed version of the string. Be sure to use recursion in your solution.

### Function Signature

```js
/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str: string): string;
```

## Examples

```js
reverseString('hello'); // should return 'olleh'
reverseString('world'); // should return 'dlrow'
reverseString(''); // should return ''
reverseString('a'); // should return 'a'
reverseString('racecar'); // should return 'racecar'
```

## Solutions

<details>
  <summary>Click For Solution</summary>

```ts
const reverseString = (str: string): string => {
  if (str === '') {
    return '';
  }

  return reverseString(str.slice(1)) + str[0];
};
```

### Explanation

1. When we call reverseString('hello'), it executes reverseString('ello') + 'h'.
2. Now, reverseString('ello') calls reverseString('llo') + 'e'.
3. Continuing, reverseString('llo') calls reverseString('lo') + 'l'.
4. In the next call, reverseString('lo') calls reverseString('o') + 'l'.
5. Finally, reverseString('o') returns 'o'.

Now, we can start "unwinding" the recursion and concatenating the characters to form the reversed string:

1. 'o' + 'l' gives 'ol'.
2. 'ol' + 'l' gives 'oll'.
3. 'oll' + 'e' gives 'olle'.
4. 'olle' + 'h' gives 'olleh'.

</details>

### Test Cases

```ts
test('Reversing a string', () => {
  expect(reverseString('Hello')).toBe('olleH');
  expect(reverseString('JavaScript')).toBe('tpircSavaJ');
  expect(reverseString('12345')).toBe('54321');
});
```

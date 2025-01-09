# Challenge: Validate Email

## Instructions

Write a function called `validateEmail` that takes in a string and returns whether the string is a valid email address. For the purposes of this challenge, a valid email address is defined as a string that contains an `@` symbol and a `.` symbol.

### Function Signature

```js
/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
function validateEmail(email: string): boolean;
```

### Examples

```js
validateEmail('john@gmail.com'); // true
validateEmail('john@gmail'); // false
```

## Solution

<details>
  <summary>Click For Solution</summary>

Using a regular expression:

```ts
const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})*$/;
  return emailRegex.test(email);
};
```

</details>

### Test Cases

```ts
test('Valid Email Addresses', () => {
  expect(validateEmail('john@example.com')).toBe(true);
  expect(validateEmail('jane.doe@domain.org')).toBe(true);
});

test('Invalid Email Addresses', () => {
  expect(validateEmail('invalid-email')).toBe(false);
  expect(validateEmail('@domain.com')).toBe(false);
  expect(validateEmail('user@domain')).toBe(false);
});
```

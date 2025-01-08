# Challenge: Display Likes

## Instructions

Write a function called `displayLikes` that takes in an array of names and returns a string of who likes the post.

The function should return a string formatted as follows:

- If no one likes it, it should return `'no one likes this'`
- If one person likes it, it should return `'{name} likes this'`
- If two people like it, it should return `'{name1} and {name2} like this'`
- If three people like it, it should return `'{name1}, {name2} and {name3} like this'`
- If more than three people like it, it should return `'{name1}, {name2} and {x} others like this'`

### Function Signature

```js
/**
 * Returns a string of who likes the post.
 * @param {string[]} names - The names of the people who like the post.
 * @returns {string} - A string of who likes the post.
 */
function displayLikes(names: string[]): string;
```

### Examples

```JS
displayLikes([]) // 'no one likes this'
displayLikes(['Peter']) // 'Peter likes this'
displayLikes(['Jacob', 'Alex']) // 'Jacob and Alex like this'
displayLikes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
displayLikes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this'
displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']) // 'Alex, Jacob and 3 others like this'
```

### Constraints

- The input array will only contain strings

## Solutions

<details>
  <summary>Click For Solution</summary>

```ts
const displayLikes = (names: String[]): String => {
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  return 'no one likes this';
};
```

### Explanation

- Some fixed cases no big deal here.

</details>

### Test Cases

```ts
test('Display Likes', () => {
  expect(displayLikes([])).toEqual('no one likes this');
  expect(displayLikes(['Peter'])).toEqual('Peter likes this');
  expect(displayLikes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
  expect(displayLikes(['Max', 'John', 'Mark'])).toEqual(
    'Max, John and Mark like this'
  );
  expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
    'Alex, Jacob and 2 others like this'
  );
  expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill'])).toEqual(
    'Alex, Jacob and 3 others like this'
  );
});
```

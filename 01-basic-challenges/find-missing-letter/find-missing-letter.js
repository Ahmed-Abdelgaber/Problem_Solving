// const findMissingLetter = (chars: string[]): string => {
//   if (chars.length === 0) return '';
//   const sumOfGivenChars = chars.reduce(
//     (acc, char) => acc + char.charCodeAt(0),
//     0
//   );
//   const firstCharCode = chars[0].charCodeAt(0);
//   const lastCharCode = chars[chars.length - 1].charCodeAt(0);
//   const expectedSum =
//     (lastCharCode * (lastCharCode + 1)) / 2 -
//     ((firstCharCode - 1) * firstCharCode) / 2;
//   return String.fromCharCode(expectedSum - sumOfGivenChars);
// };
const findMissingLetter = (chars) => {
    if (chars.length === 0)
        return '';
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
export default findMissingLetter;

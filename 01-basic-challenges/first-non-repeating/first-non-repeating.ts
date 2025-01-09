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

export default findFirstNonRepeatingCharacter;

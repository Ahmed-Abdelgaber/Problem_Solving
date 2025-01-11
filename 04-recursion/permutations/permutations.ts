const permutations = (str: string): string[] => {
  if (str.length <= 1) return [str];
  const result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const innerPermutations = permutations(restOfString);

    for (const permutation of innerPermutations) {
      result.push(currentChar + permutation);
    }
  }

  return result;
};

export default permutations;

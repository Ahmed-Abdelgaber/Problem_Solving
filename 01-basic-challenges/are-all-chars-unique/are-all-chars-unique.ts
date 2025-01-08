const areAllCharactersUnique = (str: string): boolean => {
  const strSet = new Set(str.split(''));
  return strSet.size === str.length;
};

export default areAllCharactersUnique;

const reverseString = (str: string): string => {
  if (str === '') {
    return '';
  }

  return reverseString(str.slice(1)) + str[0];
};

export default reverseString;

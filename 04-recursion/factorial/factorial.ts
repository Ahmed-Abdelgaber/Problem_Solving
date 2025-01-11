const factorial = (num: number): number =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1);

export default factorial;

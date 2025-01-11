const fibonacci = (num: number): number =>
  num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);

export default fibonacci;

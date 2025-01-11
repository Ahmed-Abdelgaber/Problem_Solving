const power = (base: number, exponent: number): number =>
  exponent === 0 ? 1 : base * power(base, exponent - 1);

//base = 2, exponent = 5
// 2 * power(2, 4)
// 2 * 2 * power(2, 3)
// 2 * 2 * 2 * power(2, 2)
// 2 * 2 * 2 * 2 * power(2, 1)
// 2 * 2 * 2 * 2 * 2 * power(2, 0)
// 2 * 2 * 2 * 2 * 2 * 1

export default power;

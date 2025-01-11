const numberRange = (startNum: number, endNum: number): number[] =>
  startNum === endNum
    ? [startNum]
    : [startNum, ...numberRange(startNum + 1, endNum)];

export default numberRange;

// Example usage:
// startNum = 1, endNum = 5
// [1, ...numberRange(2, 5)]
// [1, 2, ...numberRange(3, 5)]
// [1, 2, 3, ...numberRange(4, 5)]
// [1, 2, 3, 4, ...numberRange(5, 5)]
// [1, 2, 3, 4, 5]

type NestedArray = number | NestedArray[];

// const flattenArray = (nums: NestedArray[]): number[] => {
//   const result: number[] = [];

//   for (const el of nums) {
//     if (Array.isArray(el)) {
//       result.push(...flattenArray(el));
//     } else {
//       result.push(el);
//     }
//   }

//   return result;
// };

// Using Array.prototype.reduce
const flattenArray = (nums: NestedArray[]): number[] => {
  return nums.reduce<number[]>((acc, el) => {
    if (Array.isArray(el)) {
      acc.push(...flattenArray(el));
    } else {
      acc.push(el);
    }
    return acc;
  }, []);
};

export default flattenArray;

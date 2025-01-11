// const arrayIntersection = (array1: number[], array2: number[]): number[] => {
//   const objectOfArray1 = {};
//   for (let num of array1) {
//     objectOfArray1[num] = true;
//   }
//   return array2.filter(num => objectOfArray1[num]);
// };
const arrayIntersection = (array1, array2) => {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return [...set1.intersection(set2)];
};
export default arrayIntersection;

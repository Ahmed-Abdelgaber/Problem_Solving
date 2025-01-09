const formatPhoneNumber = (nums: number[]): string => {
  const first = nums.slice(0, 3).join('');
  const second = nums.slice(3, 6).join('');
  const third = nums.slice(6, 10).join('');

  return `(${first}) ${second}-${third}`;
};

export default formatPhoneNumber;

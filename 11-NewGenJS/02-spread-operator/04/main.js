let doubleAndReturnArgs = (arr, ...nums) => {
  return [...arr, ...nums.map((item) => item * 2)];
};

doubleAndReturnArgs([1, 2, 3], 4, 4);
// expexted result: [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4);
// expexted result: [2, 20, 8]

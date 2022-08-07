const array1 = [1, 2, 3, 4, 5];

let func = (arr) => {
  return arr.map((item, index) => (index === 3 ? item ** 2 : item));
};

func(array1);

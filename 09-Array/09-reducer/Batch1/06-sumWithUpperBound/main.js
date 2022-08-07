let str = '31 45 12 67 34 86 23 37 19 41';

const arr = str.split(' ')

arr.reduce((a,c) => c < 40 ? a + +c : a,0)
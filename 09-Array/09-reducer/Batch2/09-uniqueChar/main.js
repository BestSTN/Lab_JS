let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

alphabets.reduce((a,c) => {
  a.includes(c) || a.push(c)
  return a 
},[])
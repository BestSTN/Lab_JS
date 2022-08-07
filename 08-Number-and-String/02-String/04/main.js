function checkWord (str) {
  let newstr = str.toLowerCase();
  return newstr.includes('xxx') || newstr.includes('porn') || newstr.includes('sex')
}

checkWord('xxx')
checkWord('pOrn')
checkWord('sEX')
checkWord('Hello')

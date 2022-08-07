function ucFirst (str) {
  let newstr = str.trim()
  return newstr[0].toUpperCase() + newstr.slice(1)
}

ucFirst('hello')
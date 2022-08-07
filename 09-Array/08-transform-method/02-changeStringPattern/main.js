let str = 'background-color'

function convertCamel(str) {
  const arr = str.split('-')
  return arr[0] + arr[1][0].toUpperCase() + arr[1].slice(1)
}

convertCamel(str)
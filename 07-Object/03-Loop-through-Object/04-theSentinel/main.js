const THE_SENTINEL = 'stop';

let createObj = () => {
  const result = {};
  let inPutKey = '';
  let inPutValue = '';
  
  do {
    inPutKey = prompt('put in key')
    inPutValue = prompt('put in value')
    if (inPutKey !== null && inPutKey.trim !== '' && (inPutKey !== THE_SENTINEL && inPutValue !== THE_SENTINEL)) {
      result[inPutKey] = inPutValue;
    }
  } while (inPutKey !== THE_SENTINEL && inPutValue !== THE_SENTINEL);

  return result
}


console.log(createObj());
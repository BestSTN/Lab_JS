function extractCurrencyValue(str, rate) {
  let dollar = +(str.slice(1))
  return 'THB' + (dollar * rate)
}

extractCurrencyValue('$120', 30); // THB3600
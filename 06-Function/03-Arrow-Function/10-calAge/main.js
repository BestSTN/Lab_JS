let checkLeapYear = (year) => {
  if (year % 100 === 0) {
    return year % 400 ===0;
  }
  return year % 4 ===0;
}


let calAge = (year) => {
  let day = 0;
  
  for (let i = year ; i <= 2020 ; i++) {
    if (checkLeapYear(i)) {
      day += 366;
    } else {
      day += 365;
    }
  }

  return day;
}
calAge(1998);
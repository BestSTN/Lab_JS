let checkLeapYear = (year) => {
  // if (year % 4 !== 0) {
  //   return false;
  // } else if (year % 100 === 0) {
  //   return year % 400 === 0;
  // } else return true;


  if (year % 100 === 0) {
    return year % 400 ===0;
  }
  return year % 4 ===0;
}

checkLeapYear(1900);
checkLeapYear(2000);
checkLeapYear(2544);
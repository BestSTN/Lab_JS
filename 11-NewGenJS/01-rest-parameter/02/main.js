let filterOutOdds = (...num) => [...num].filter((item) => item % 2 === 0)

filterOutOdds(0,1,2,3,4,5,6)
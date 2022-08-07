let money = 100000;

for (let i = 0 ; i < 10 ; i++) {
  money = (money*1.025).toFixed(2)
  console.log(money);
}
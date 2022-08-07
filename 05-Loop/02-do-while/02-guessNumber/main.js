

let answer = prompt('Player 1: pick answer between 1-99')
  if (+answer > 99 || +answer < 1) {
    alert('Invalid range')
  } else {
    alert('Player 2 turn')
    let counter = 0;
    let guess;

    do {
      guess = prompt('Enter your guess');
      counter++;

      if (guess == answer) {
        alert(`Correct guess in ${counter} time!`)
      } else if (+guess > +answer && +guess < 100) {
        alert('Too high!')
      } else if (+guess < +answer && +guess > 0) {
        alert('Too low!')
      } else {
        alert('Enter number between 1-99!')
      }

    } while (answer !== guess)

  }


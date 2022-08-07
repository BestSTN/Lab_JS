let userInput = prompt('Put in number!');

if (userInput === null || userInput.trim() === '' || isNaN(userInput)) {
  alert('Invalid number');
} else {
  if (userInput > 0) {
    alert('Positive number');
  } else if (userInput == 0) {
    alert('Zero');
  } else {
    alert('Negative number');
  }
}
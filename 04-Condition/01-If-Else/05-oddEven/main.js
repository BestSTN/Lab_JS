let userInput = prompt('Put in number!');

if (userInput === null || userInput.trim() === '' || isNaN(userInput)) {
  alert('Invalid number');
} else {
  if (userInput%2 == 0) {
    alert('Even number');
  } else {
    alert('Odd number');
  }
}
let score = prompt('Put in score');
if (score >= 80) {
  alert('A');
} else if (80 > score && score >= 70) {
  alert('B');
} else if (70 > score && score >= 60) {
  alert('C');
} else if (60 > score && score >= 50) {
  alert('D');
} else {
  alert('F');
}
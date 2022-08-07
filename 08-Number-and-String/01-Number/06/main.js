function random (min , max) {
  let diff = Math.random() * (max - min);
  //percent of maxmin diff

  return (diff + min).toFixed(2)
}
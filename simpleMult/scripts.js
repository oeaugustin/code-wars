function simpleMultiplication(number) {
  var sum = 0;
  if (number % 2 == 0) {
    sum = number * 8;
  } else {
    sum = number * 9;
  }
  return sum;
}

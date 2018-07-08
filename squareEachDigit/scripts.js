function squareDigits(num){
//spit all digits of integer..

  //create variable for empty array
  var output = []
  //convert number to string
  var newNum = num.toString();
  //push digits of integer to an array
  for (var i = 0; i < newNum.length; i++) {
    var sum = Math.pow(newNum.charAt(i), 2)
    output.push(+newNum.charAt(sum));
  }
  console.log(output)
}

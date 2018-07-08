function high(x){
  var arr = x.toLowerCase().split(" ");
  var sum = 0;
  var holder = 0;
  var holder2 = 0;
  for(var i = 0; i < arr.length; i++) {

    for(var j = 0; j < arr[i].length; j++) {

      sum += arr[i].charCodeAt(j) - 96;

    }

    if (sum > holder) {
      holder = sum;
      holder2 = i;

     }
    sum = 0;
  }
   console.log(arr[holder2]);
   return arr[holder2];

}

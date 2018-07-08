function comp(arr1,arr2){
  if(!arr1 || !arr2) return false;
  arr1.map(function(x){
    arr2.map(function(y){
      if(x*x == y){
        const ind = arr2.indexOf(y);
        arr2.splice(ind,1)
      }
    })
  })
  return arr2.length == 0
}

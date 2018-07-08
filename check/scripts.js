function groupCheck(s){

  var stack = [];
  var patt = new RegExp("[\[\{\(]");

  for(var i = 0; i < s.length; i++){
    if(patt.test(s[i])){
      stack.push(s[i]);
    } else {
      var c = stack.pop();
      if(s[i] === ')' && c !== '(') return false;
      else if(s[i] === ']' && c !== '[' ) return false;
      else if(s[i] === '}' && c !== '{' ) return false;
    }
  }

  return stack.length === 0;
}

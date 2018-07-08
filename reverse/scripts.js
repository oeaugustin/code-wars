function reverseWords(str) {
  //split words into seperate arrays
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

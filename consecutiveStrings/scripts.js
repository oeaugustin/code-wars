function longestConsec(a, k) {
    return (a.length == 0 || k > a.length || k < 1) ? '' : a.reduce(function(s, c, i) {
      return i+k > a.length || s.length >= a.slice(i,i+k).join('').length ? s : a.slice(i,i+k).join('');
    }, '');
}

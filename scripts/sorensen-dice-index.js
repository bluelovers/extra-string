const matchingNgramCount = require('./matching-ngram-count');
function sorensenDiceIndex(s1, s2, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? (g+g)/G:1;
};
module.exports = sorensenDiceIndex;

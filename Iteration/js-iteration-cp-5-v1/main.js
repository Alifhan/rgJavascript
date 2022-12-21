function generateParenthesesPair(numberOfPairs) {
  var dalam_kurung = "";
  for (let i = 0; i < numberOfPairs; i++) {
    dalam_kurung += "(";
  }
  for (let i = 0; i < numberOfPairs; i++) {
    dalam_kurung += ")";
  }
  return dalam_kurung;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;

module.exports = function getZerosCount(number) {
  // your implementation
  var i = 5;
  var result = 0;
  while(number > i) {
    result += Math.floor(number / i);
    i *= 5;
  }
  return result;
}

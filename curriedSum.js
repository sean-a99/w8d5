function curriedSum(numArgs) {
  sum = 0
  return function _curriedSum(num) {
    sum += num
    numArgs -= 1
    if (numArgs === 0) {
      return sum
    } else {
      return _curriedSum
    }
  }
}

const bum = curriedSum(4);
console.log(bum(5)(30)(20)(1)); // => 56
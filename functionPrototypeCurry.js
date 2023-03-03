Function.prototype.curry = function(numArgs) {
  let that = this
  let args = []
  return function _curry(calltime) {
    numArgs -= 1
    args.push(calltime)
    if (numArgs === 0) {
     return that.apply(that, args) 
    } else {
      return _curry
    }
  }
}




function sumThree(num1, num2, num3) {
  return num1 + num2 + num3
}

let f1 = sumThree.curry(3)
console.log(f1)
f1 = f1(4)
console.log(f1)
f1 = f1(20)
console.log(f1)
f1 = f1(6)
console.log(f1)
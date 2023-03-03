//sum

function sum() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sum(2, 3, 4))

const sum2 = function(...args) {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    sum += args[i]
  }
  return sum
}

console.log(sum(2, 3, 4))


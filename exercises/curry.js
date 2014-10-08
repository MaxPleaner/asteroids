var curriedSum = function (sumCount) {
  var numbers = [];
  var _curriedSum = function (individualNumber) {
    numbers.push(individualNumber);
    // console.log(numbers)
    if (numbers.length === sumCount) {
      var totalAmt = 0;
      numbers.forEach(function(eachItem){
        totalAmt += eachItem;
      });
      return totalAmt;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

// var sum = curriedSum(4);
// // console.log(sum(5)(30)(20)(1)); // => 56
// fun2 = sum(5) // _curriedSum but numbers = [5]
// fun3 = sum(30) // _curriedSum but numbers = [5, 30]
// fun4 = sum(20) // _curriedSum but numbers = [5, 30, 20]
// result = sum(1) // result
// console.log(result)
// console.log(curriedSum(3)(1)(2)(3))

Function.prototype.curry = function (numArgs) {
  var args = [];
  var that = this;
  var _curry = function (indvArg) {
    args.push(indvArg);
    if (args.length === numArgs) {
      return that.apply(undefined, args);
    } else {
      return _curry;
    }
  };
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6));
 // == 30
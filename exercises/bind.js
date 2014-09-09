Function.prototype.myBind = function (ctx) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var args2 = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(ctx, args2);
  };
};


var sum = function () {
  console.log(this.name);
  var result = 0;
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(num){
    result += num;
  });
  return result;
};

// console.log(sum(1,2,3));

var myBoundFunction = sum.myBind({name: 5}, 1, 2);
console.log(myBoundFunction(3));
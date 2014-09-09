var sum = function () {
  var result = 0;
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(num){
    result += num;
  });
  return result;
};

console.log(sum(1,2,3));
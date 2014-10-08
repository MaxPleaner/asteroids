Function.prototype.inherits = function(parentClass) {
  var Surrogate = function () {};
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
};
var Animal = function (name) {
  this.name = name;
};
Animal.prototype.roar = function () {
    console.log("roar");
  };
var Cat = function (name) {
  //this is the cat we are currently making
  Animal.call(this, name);
  this.meow = function () {
    console.log("meow");
  };
};

Cat.inherits(Animal);

var cat = new Cat("JJ");
var animal = new Animal("B");

cat.roar();
console.log(cat.name);
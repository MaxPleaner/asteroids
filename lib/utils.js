(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Util = Asteroids.Util = {};
  
  Util.inherits = function(parentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = parentClass.prototype;
    this.prototype = new Surrogate();
  };
  
})();

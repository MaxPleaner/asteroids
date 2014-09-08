(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Asteroid = Asteroids.Asteroid = function (pos) {
    var color = "red";
    var radius = 15;
    var vel = Math.floor(Math.random() * 10);
    MovingObject.call(this, {pos: pos, color: color, radius: radius, vel: vel});
  };

  Asteroid.inherits(MovingObject);
})();
  
  
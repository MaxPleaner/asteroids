(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    var color = "red";
    var radius = 15;
    var vel = [(Math.floor((Math.random() -0.5) * 10)),
               (Math.floor((Math.random() -0.5) * 10))];
    Asteroids.MovingObject.call(this, {pos: pos, color: color,
                                 radius: radius, vel: vel, game: game});
   };

  Asteroids.Util.inherits.call(Asteroid, Asteroids.MovingObject);

})();
  
  

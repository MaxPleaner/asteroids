(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Bullet = Asteroids.Bullet = function (pos, dir, game) {
    var norm = Math.sqrt(Math.pow(dir[1] - 0, 2) + Math.pow(dir[1] - 0, 2))
    Asteroids.MovingObject.call(this, {
      pos: [pos[0] + 5, pos[1] + 5], 
      color: "black",
      radius: 2, 
      vel: [0,10],
      game: game});
  };
  Asteroids.Util.inherits.call(Bullet, Asteroids.MovingObject);
  
  
  Bullet.prototype.isWrappable = false;
  // Bullet.prototype.checkCollisions = function () {
  //   if ()
  // }
})();
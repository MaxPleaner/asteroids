(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };
  
  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0, 2 * Math.PI,
      false
    );
    ctx.fill();
  };
  
  MovingObject.prototype.move = function () {
    this.game.wrap(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };
  
  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var x = this.pos[0];
    var y = this.pos[1];
    var x1 = otherObject.pos[0];
    var y1 = otherObject.pos[1];
    var distance = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
    var radiiSum = this.radius + otherObject.radius
    if (distance < radiiSum) {
      return true;
    }
    return false;
  };
  
})();

// var mo = new Asteroids.MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// });
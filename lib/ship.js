(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (pos, game) {
    this.RADIUS = 7;
    this.COLOR = "green";
    this.vel = [0, 0];
    this.pos = pos;
    this.game = game;    
    Asteroids.MovingObject.call(this, {
      pos: this.pos, 
      color: this.COLOR,
      radius: this.RADIUS, 
      vel: this.vel, 
      game: this.game});
  };
  
  Asteroids.Util.inherits.call(Ship, Asteroids.MovingObject);

  Ship.prototype.fireBullet = function () {
    this.game.bulletArray.push(new Asteroids.Bullet(this.pos, this.vel, this.game));
  };

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition(this.game.canvasEl);
    this.vel = [0, 0];
  };
  
  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };
  
})();

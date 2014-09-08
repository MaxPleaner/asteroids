(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Game = Asteroids.Game = function () {
    this.canvasEl = document.getElementsByTagName("canvas")[0];
    this.DIM_X = parseInt(canvasEl.attributes["width"].value);
    this.DIM_Y = parseInt(canvasEl.attributes["height"].value);
    this.NUM_ASTEROIDS = 5;
  };
  
  var astrArray = [];
  Game.prototype.addAsteroids = function () {
    var ctx = Game.canvasEl.getContext('2d');
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var newAsteroid = new Asteroid(Game.randomPosition(canvasEl));
      Game.draw(ctx, newAsteroid.pos, newAsteroid.radius);
      MovingObject.draw.call(newAsteroid, ctx);
      astrArray.push(newAsteroid);
    }
  };
  
  Game.prototype.randomPosition = function (canvasEl) {
    var WIDTH = Game.DIM_X;
    var HEIGHT = Game.DIM_Y;
    return [Math.floor(Math.random() * WIDTH),
            Math.floor(Math.random() * HEIGHT)];
  };
  
  Game.prototype.draw = function (ctx, position, radius) {
    ctx.clearRect(position[0], position[1], (radius * 2), (radius * 2));
  };
  
  Game.prototype.moveObjects = function () {
    for (var i = 0; i < astrArray.length; i++) {
      astrArray[i].move();
    }
  };
  
})();
  
  
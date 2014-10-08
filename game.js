(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Game = Asteroids.Game = function () {
    this.canvasEl = document.getElementsByTagName("canvas")[0];
    this.DIM_X = parseInt(this.canvasEl.attributes["width"].value);
    this.DIM_Y = parseInt(this.canvasEl.attributes["height"].value);
    this.NUM_ASTEROIDS = 15;
    this.astrArray = [];
    this.bulletArray = [];
    this.ship = new Asteroids.Ship(this.randomPosition(this.canvasEl), this);
  };
  
  Game.prototype.add = function (obj) {
    if (obj instanceof Asteroids.Bullet) {
      this.bulletArray.push(obj);
    }  
    else if (obj instanceof Asteroids.Asteroid) {
      this.astrArray.push(obj);
    }
  };
  
  Game.prototype.allObjects = function () {
    return this.astrArray.concat(this.ship).concat(this.bulletArray);
  }
  
  Game.prototype.addAsteroids = function () {
    var ctx = this.canvasEl.getContext('2d');
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.putAsteroidOnBoard();
    }
    window.setInterval(function(){
      this.putAsteroidOnBoard();
    }.bind(this), 1000)

  };

  Game.prototype.putAsteroidOnBoard = function () {
    var newAsteroid = new Asteroids.Asteroid(this.randomPosition(this.canvasEl), this);
      this.astrArray.push(newAsteroid);
  }
  
  Game.prototype.randomPosition = function (canvasEl) {
    var WIDTH = this.DIM_X;
    var HEIGHT = this.DIM_Y;
    return [Math.floor(Math.random() * WIDTH),
            Math.floor(Math.random() * HEIGHT)];
  };
  
  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].draw(ctx);
    }
  };
  
  Game.prototype.moveObjects = function () {
    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].move();
    }
  };
  
  Game.prototype.wrap = function (pos) {
    if (pos[0] > this.DIM_X) {
      pos[0] = 0;
    }
    if (pos[1] > this.DIM_Y) {
      pos[1] = 0;
    }
    if (pos[0] < 0) {
      pos[0] = this.DIM_X;
    }
    if (pos[1] < 0) {
      pos[1] = this.DIM_Y;
    }
  };
  
  Game.prototype.checkCollisions = function () {
    var that = this;
    this.allObjects().forEach(function(flyingObject){
      that.allObjects().forEach(function(otherFlyingObject){
        if ((flyingObject !== otherFlyingObject) && flyingObject.isCollidedWith(otherFlyingObject)) {
          if ((flyingObject instanceof Asteroids.Ship) || (otherFlyingObject instanceof Asteroids.Ship)) {
            if (!(flyingObject instanceof Asteroids.Bullet) && !(otherFlyingObject instanceof Asteroids.Bullet)) {
            that.ship.relocate();
            } 
          } else {
            that.remove(flyingObject);
            that.remove(otherFlyingObject);
          }
          
          // [asteroid, otherAsteroid].forEach(function(item){
          // that.remove(item);
        }
      });
    });
  };
    
  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };
    
  Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroids.Asteroid) {
      var itemIndex = this.astrArray.indexOf(obj);
      this.astrArray.splice(itemIndex, 1);  
    }
    else if (obj instanceof Asteroids.Bullet) {
      var itemIndex = this.bulletArray.indexOf(obj);
      this.bulletArray.splice(itemIndex, 1);   
    }
  };
  
  Game.prototype.isOutOfBounds = function (pos) {
    if ((pos[0] > this.DIM_X) || (pos[0] < 0)) {
      return true;
    } else if ((pos[1] > this.DIM_Y) || (pos[1] < 0)) {
      return true;
    }
    return false;
  };
  
})();
  
  

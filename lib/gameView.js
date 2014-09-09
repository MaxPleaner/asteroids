(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };
  
  GameView.prototype.start = function () {
    // var newAsteroidsInterval = setInterval(function(){
      this.game.addAsteroids();
      this.bindKeyHandlers();
    
    // }, 2000)
    
    var gameInterval = setInterval(function(){
      this.game.draw(this.ctx);
      this.game.step();
    }, 20);
  };
  
  GameView.prototype.bindKeyHandlers = function () {
    var that = this
    key('s', function(){
      that.game.ship.power([0,4]);
    });
    key('a', function(){
      that.game.ship.power([-4,0]);
    });
    key('w', function(){
      that.game.ship.power([0,-4]);
    });
    key('d', function(){
      that.game.ship.power([4,0]);
    });
    key('b', function(){
      that.game.ship.fireBullet();
    })
  };
  
})();
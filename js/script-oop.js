// Objects we could have
// 1) Die
// 2) Player
// 3) Game (possible state machine?)

function Player(name) {
  this.name = name;
  this.score = 0;
};

function Die(element) {
  this.element = element;
}

Die.sides = ['shotgun', 'shotgun', 'brain', 'brain', 'escape', 'escape'];

Die.prototype.roll = function() {
  var sides = Die.sides.length;
  var index = Math.floor(Math.random() * sides)

  return Die.sides[index];
}

Die.prototype.reset = function() {
  $(this.element).removeClass('escape brain shotgun');
}

function Game() {
  var game = this;

  this.player_1 = new Player('Player one');
  this.player_2 = new Player('Player two');

  this.dice = [];
  $('.roll').each(function() {
    var die = new Die(this);
    game.dice.push(die);
  });

  this.shotgunCount = 0;
  this.brainCount = 0;
}

Game.prototype.resetBoard = function() {
  $('.death').addClass('hidden');
  $('.turn-stats').removeClass('hidden');
  this.dice.forEach(function(die) {
    die.reset();
  });
}

Game.prototype.takeTurn = function() {
  this.resetBoard();
  this.rollDice(); // TODO implement rollDice
}

$(function() {
  var game = new Game();

  $('.feed').on('click', function() {
    game.takeTurn();
  });
});

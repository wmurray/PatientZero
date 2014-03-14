// Game constructor
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

  // reset each die we have for the game
  this.dice.forEach(function(die) {
    die.reset();
  });
}

// Loop through and roll each die
Game.prototype.rollDice = function() {
  this.dice.forEach(function(die) {
    die.roll();
    // die.element
    if(die.currentRoll == 'shotgun' && shotgunCount < 2){
      shotgunCount+=1;
      $('#shotgun-count').text(shotgunCount);
    } else if (roll == 'shotgun' && shotgunCount == 2){
      shotInHead();
    } else if (roll == 'brain') {
      brainCount+=1;
      $('#brain-count').text(brainCount);
    };

  });
}

// Take the next turn, reset the board and roll all our die
Game.prototype.takeTurn = function() {
  this.resetBoard();
  this.rollDice();
}

$(function() {
  var game = new Game();

  $('.feed').on('click', function() {
    game.takeTurn();
  });
});

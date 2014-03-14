game = {
  numberOfPlayers: 2,
  rollDie: function() {
    console.log('roll die');
  }
}

game.numberOfPlayers; // 2
game.rollDie();

///////.......
///////.......
///////.......
///////.......

// constructor
function Game() {
  this.numberOfPlayers = 2;
}

Game.prototype.rollDie = function() {
  console.log('roll die');
}

game = new Game();
game.rollDie();

///////.......
///////.......
///////.......
///////.......
///////.......
///////.......

die1 = {
  sides: ['shotgun', 'shotgun', 'brain', 'brain', 'escape', 'escape'],
  roll: function() {
    var sides = this.sides.length;
    var index = Math.floor(Math.random() * sides)

    return this.sides[index];
  }
}

die2 = {
  sides: ['shotgun', 'shotgun', 'brain', 'brain', 'escape', 'escape'],
  roll: function() {
    var sides = this.sides.length;
    var index = Math.floor(Math.random() * sides)

    return this.sides[index];
  }
}

die3 = {
  sides: ['shotgun', 'shotgun', 'brain', 'brain', 'escape', 'escape'],
  roll: function() {
    var sides = this.sides.length;
    var index = Math.floor(Math.random() * sides)

    return this.sides[index];
  }
}

die1.roll();
die2.roll();
die3.roll();

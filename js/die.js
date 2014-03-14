function Die(element) {
  this.element = element;
}

Die.sides = ['shotgun', 'shotgun', 'brain', 'brain', 'escape', 'escape'];

Die.prototype.roll = function() {
  var sides = Die.sides.length;
  var index = Math.floor(Math.random() * sides);
  this.currentRoll = Die.sides[index];
  $(this.element).addClass(this.currentRoll);

}

Die.prototype.reset = function() {
  $(this.element).removeClass('escape brain shotgun');
}

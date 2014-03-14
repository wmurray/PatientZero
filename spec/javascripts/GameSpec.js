describe('A game', function() {
  var game, board;

  beforeEach(function() {
    board = $('<div class="roll"/>')
    game = new Game();
  });

  describe('#rollDice', function() {
    it('increases shotgunCount by 1 when a shotgun is rolled and the shotgunCount is less than 2', function() {
      game.rollDice();
      expect(game.shotgunCount).toBe(2)
    });
  });
});

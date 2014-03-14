describe('A die', function() {
  var die, el;

  beforeEach(function() {
    el = $('<div class="roll"/>')
    die = new Die(el)
  });

  describe('#roll', function() {
    it('sets the currentRoll to the value of the roll', function() {
      die.roll()
      expect(die.currentRoll).not.toBeNull();
    });

    it('adds a class to the roll element to represent the roll', function() {
      die.roll()
      expect(el.hasClass(die.currentRoll)).toBe(true)
    });
  });
});

var die = [shotgun, shotgun, brain, brain, escape, escape];

// var die = [shotgun, shotgun, shotgun, brain, escape, escape]
// var die = [shotgun, brain, brain, brain, escape, escape]


var playerOneScore = 0;
var playerTwoScore = 0;

var currentValue;

1. Roll dice.
    User clicks "Feed" button.
    Function to randomly select index value from "die" array runs x 3
    Associate given indexes with appropriate image.
    Display image.
    If random index is shotgun:
      +1 to shotgun number.
      If shotgun nubmer is >= 3, end turn immediately, all brains lost.
      Switch players.
    If random index is brain
      +1 to brains number.
    Else, do nothing.

2. Scoring
    User clicks "Rest" button
      Add current brains number to appropriate player score.
      Change players.
      Reset brains number and shotgun number to 0.

3. Game end
    Player score reaches 13 and is at least +2 of other player.
    Lower scoring player - Feeding Frenzy!
      Display "Feeding Frenzy!"
      Player rolls until being +2 of original winner or until dead. (shotgun number >= 3).
        If original losing player wins,
          Display appropriate winner, "Comeback!"
        If original winning player remains winner,
          Display appropriate winner, "Uncontested!"
    
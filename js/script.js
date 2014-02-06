var die = ['shotgun', 'shotgun', 'brain', 'brain', 'escape', 'escape'];

// Future additional die types
// var dieDangerous = ['shotgun', 'shotgun', 'shotgun', 'brain', 'escape', 'escape']
// var dieEasy = ['shotgun', 'brain', 'brain', 'brain', 'escape', 'escape']

// making the die an object
// var d1 = {
//  sides:die.length,
//  sideValue:['shotgun', 'shotgun', 'brain', 'brain', 'escape', 'escape'],
// };

var playerOneScore = 0;
var playerTwoScore = 0;
var shotgunCount = 0;
var brainCount = 0;


// Generates random number between 0 and 5 for the number of .roll
// elements in the DOM, then returns matching values from die array. 
// This acts as rolling 3 dice.
  function rollDie(){
      var index = Math.floor(Math.random()*die.length);
      return die[index];
  };

// Iterates rollDie across array of class roll.
// If statements allow to score baased on results
// Adding to shotgun/brain count as needed and ending turn 
// when 3 shotguns are rolled.
  function feed(){
    $('.death').addClass('hidden');
    $('.turn-stats').removeClass('hidden');
    $('.roll').each(function(index){
      $(this).removeClass("escape brain shotgun");
      var roll = rollDie();
      $(this).addClass(roll);
        if(roll == 'shotgun' && shotgunCount < 2) {
          shotgunCount+=1;
          $('#shotgun-count').text(shotgunCount);
        } else if (roll == 'shotgun' && shotgunCount == 2) {
          shotInHead();
        } else if (roll == 'brain') {
          brainCount+=1;
          $('#brain-count').text(brainCount);
        };
    });
  };

// Same as above, but the end of this turn is the end of the game.
  function frenziedFeed(){
    $('.roll').each(function(index){
      $(this).removeClass("escape brain shotgun");
      var roll = rollDie();
      $(this).addClass(roll);
        if(roll == 'shotgun' && shotgunCount < 2) {
          shotgunCount+=1;
          $('#shotgun-count').text(shotgunCount);
        } else if (roll == 'shotgun' && shotgunCount == 2) {
          lastShot();
        } else if (roll == 'brain') {
          brainCount+=1;
          $('#brain-count').text(brainCount);
          tallyScore();
          checkScore();
        };
    });
  };

// Stores the score value in the appropriate location.
  function tallyScore(){
      if ($('.active-player').has('span#player-one-score').length > 0) {
      playerOneScore = playerOneScore + brainCount;
      $('#player-one-score').text(playerOneScore);
    } else {
      playerTwoScore = playerTwoScore + brainCount;
      $('#player-two-score').text(playerTwoScore);
    };
  };

// Selects next player. 
// Resets turn-stats.
// Runs checkScore to determine if it is last turn (feeding frenzy).
  function passTurn(){
    tallyScore();
    resetCounts();
    checkScore();
  };


// Resets shotgunCount and brainCount array
// as well as the turn stats to 0.
  function resetCounts(){
    shotgunCount=0;
    brainCount=0;
    $('#shotgun-count').text(shotgunCount);
    $('#brain-count').text(brainCount);
  };

// End turn due to sudden death.
// Displays "SHOTGUNNED" dialogue.
// Hides turn-stats dialogue.
  function shotInHead(){
    $('.turn-stats').addClass('hidden');
    $('.death').removeClass('hidden');
    $('.player').toggleClass("active-player");
    resetCounts();
  };

  function lastShot(){
    $('.frenzy .turn-stats').addClass('hidden');
    $('.game-over').removeClass('hidden');
    if(playerOneScore > playerTwoScore){
      $('.winner').text('Player 1');
    } else {
      $('.winner').text('Player 2');
    };
    resetCounts();
    $('feed-wide').text('New Game').addClass('new-game');
  };

// Rules pop-up/overlay. Will contain the rules-text div.

// End of Game.
// Needs to check player score variable when passTurn runs.
// If score is >= 13, other player has chance to roll until score > first winner
// Or until death.
// If other player succeeds, they win/game ends.
// If fail, original player still winner/game ends.
function checkScore() {
  if (playerOneScore >= 6 || playerTwoScore >= 6) {
    $('.frenzy').removeClass('hidden');
    $('.turn-stats').addClass('frenzy');
    $('.rest').addClass('hidden');
    $('.feed').addClass('feed-wide').removeClass('feed');
    $('.player').toggleClass("active-player");
  } else if (playerOneScore >= 6 && playerTwoScore >= 6 && playerOneScore >= playerTwoScore && $('.active-player').has('span#player-one-score').length > 0) {
      $('.frenzy .turn-stats').addClass('hidden');
      $('.game-over').removeClass('hidden');
      $('.winner').text('Player 1');
  } else if (playerOneScore >= 6 && playerTwoScore >= 6 && playerOneScore <= playerTwoScore && $('.active-player').has('span#player-two-score').length > 0) {
      $('.frenzy .turn-stats').addClass('hidden');
      $('.game-over').removeClass('hidden');
      $('.winner').text('Player 1');
  } else {
    $('.player').toggleClass("active-player");
  };
};

// click event handler for "Feed" button, "Rest" button, "Rules" 
// button, and "New Game" button.
  $('document').ready(function(){
    $('.feed').on('click', feed);
    $('.feed-wide').on('click', frenziedFeed);
    $('.rest').on('click', passTurn);
    
  });


    
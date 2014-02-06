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
    $('.roll').each(function(index){
      $(this).removeClass("escape brain shotgun");
      var roll = rollDie();
      $(this).addClass(roll);
        if($(this).hasClass('shotgun') == true && shotgunCount < 2) {
          shotgunCount+=1;
          $('.shotgun-count').text(shotgunCount);
        } else if ($(this).hasClass('shotgun') == true && shotgunCount = 2) {
          shotInHead();
        } else if ($(this).hasClass('brain') == true) {
          brainCount+=1;
          $('.brain-count').text(brainCount);
        };
    });
  };

// Stores the score value in the appropriate location.
// Selects next player. 
  function passTurn(){
    // Add brain count to appropriate player score.
    if($('.active-player').has('span#player-one-score')){
      playerOneScore = playerOneScore + brainCount;
      $('#player-one-score').text(playerOneScore);
    } else {
      playerTwoScore = playerTwoScore + brainCount;
      $('#player-two-score').text(playerTwoScore);
    };
    $('.player').toggleClass("active-player");
    resetCounts();
  };


// Resets shotgunCount and brainCount array
// as well as the turn stats to 0.
  function resetCounts(){
    shotgunCount=0;
    brainCount=0;
    $('.shotgun-count').text(shotgunCount);
    $('.brain-count').text(brainCount);
  };

// End turn due to sudden death.
// Displays "SHOTGUNNED" dialogue.
// Hides turn-stats dialogue.
  function shotInHead(){
    $('#turn-stats').addClass('hidden');
    $('#death').removeClass('hidden');
    $('.player').toggleClass("active-player");
    resetCounts();
  };

// Rules pop-up/overlay. Will contain the rules-text div.

// End of Game.
// Needs to check player score variable when passTurn runs.
// If score is >= 13, other player has chance to roll until score > first winner
// Or until death.
// If other player succeeds, they win/game ends.
// If fail, original player still winner/game ends.

// click event handler for "Feed" button and "Rest" button.
  $('document').ready(function(){
    $('.feed').on('click', feed); 
    $('.rest').on('click', passTurn);
  });


    
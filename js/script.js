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



// Generates random number between 0 and 5 for the number of .roll
// elements in the DOM. This acts as rolling 3 dice.
  function rollDie(){
      var index = Math.floor(Math.random()*die.length);
      return die[index];
  };

// Calls getRandomIndex.
// Passes each value of results array into setValue function. 
// val into setValue function.
  function feed(){
    $('.roll').each(function(index){
      $(this).removeClass("escape brain shotgun");
      var roll = rollDie();
      $(this).addClass(roll);
      function(){
        if $(this).hasClass('shotgun')==true{
          $('.shotgun-count').text($(this).val()+1);
        } else if $(this).hasClass('brain')==true{

        };
      }
    });

  };

// Stores the score value in the appropriate location.
// Selects next player. 
  function passTurn(){
    //add score to appropriate player.
    $('.player').toggleClass("active-player");
  };

// click event handler for "Feed" button and "Rest" button.
  $('document').ready(function(){
    $('.feed').on('click', feed); 
    $('.rest').on('click', passTurn);
  });


    
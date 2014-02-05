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
var results = [];
var currentValues = [];


// Generates random number between 0 and 5 for the number of .roll
// elements in the DOM. This acts as rolling 3 dice.
  function getRandomIndex(){
    $('.roll').each(function(){
      results.push(Math.floor(Math.random()*6));
    });
  };

// Sets currentValues array equal to random values of die array based
// on the values pulled from the results array. The values in the 
// results array are the indexes of the die array we wish to display.
// Calls displayImage function.
  function setValue(number){
    currentValues.push(die[number]);
    displayImage();
  };

// Displays appropriate image in each .roll element of the DOM 
// according to the currentValues array.
  function displayImage(){
     $('.roll').each(function(index){
      $(this).text(currentValues[index]);
     });
  };

// Calls getRandomIndex.
// Passes each value of results array into setValue function. 
// val into setValue function.
  function rollDie(){
    getRandomIndex();
    results.forEach(function(entry){
      setValue(entry);
    });
  };

// clears values of results array and currentValues array (without 
// clearing both, array lengths get exponentially longer. Clearing
// only results made arrays additively larger).
  function clearRoll(){
    results = [];
    currentValues = [];
  };

// Stores the score value in the appropriate location.
// Selects next player. 
  function passTurn(){
    //add score to appropriate player.
    $('.player').toggleClass("active-player");
  };

// click event handler for "Feed" button and "Rest" button.
  $('document').ready(function(){
    $('.feed').on('click', function(){
      clearRoll();
      rollDie();
    }); 
    $('.rest').on('click', function(){
      passTurn();
    });
  });


    
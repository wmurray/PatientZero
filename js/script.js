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

var currentValue;

// Generates random number between 0 and 5
    function getRandomIndex(){
      $('.roll').each(function(){
        return Math.floor(Math.random()*6);
        console.log;
      });
    };
// Sets currentValue variable equal to a given number
    function setValue(number){
      currentValue = die[number];
      displayImage();
    };

// Displays appropriate image for given index value
    function displayImage(){
      $('#roll-results').text(currentValue);
    };

// Sets result of getRandomIndex equal to val variable, passing 
// val into setValue function.
    function rollDie(){
       var val = getRandomIndex();
       setValue(val);
       console.log(currentValue);
    };

//click event handler for rollDie function
   $('document').ready(function(){
       $('.feed').on('click', rollDie); 
     });


    
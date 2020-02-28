//Global Variables//
//_____________________________________________________________________________________
//Create an array of words
var word = ['madonna', 'aerosmith', 'eurythmics', 'wham', 'queen', 'blondie', 'clash']

//Empty variables to store values later
var randWord = "";
var wordChosen = "";
var chosenLetter = []; 
var underScore = 0;
var wrongLetter = [];
var rightLetter = [];


//Counter Variables
var wins = 0;
var losses = 0;
var guesses = 12;

// DOM manipulation
docUnderScore = document.getElementsByClassName("underscore");
docRightGuess = document.getElementsByClassName("rightLetter");
docWrongGuess = document.getElementsByClassName("wrongLetter");

//Main//
//______________________________________________________________________________________
//Game Start Function

//Set-up selection of random word from array
    //Step One: Computer randomly generates word from word array
    var randWord = [Math.floor(Math.random() * word.length)];
    var chosenWord = word[randWord];
    
    //Step Two: Store underscores
    underScore = [];
    
    //Step Three: Create underscores based on Length of Word
    
    var generateUnderscore = () => {
        for (var i=0; i<chosenWord.length; i++) {
            underScore.push('_');
        }
        return underScore;
    }
   

//Set-up reset of Game
function reset() {
    guesses = 12;
    wrongLetter = [];
    rightLetter = [];
}

function guess() {
    var elGuess = document.getElementById("lives");
    if(guesses === 0) {
        return;
    } 
    
    else if (guesses > 0) {
        guesses--;
        elGuess.textContent = guesses;
    }
}
  
//Get user's guess and check letters -> trigger win/loss
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode).toLowerCase();
//if Users guess is right
    if(chosenWord.indexOf(keyword)> -1){
    //add to right words array
        rightLetter.push(keyword);
    //replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');  
        docRightGuess[0].innerHTML = rightLetter;
    //Check to see if user word matches guesses
        if(underScore.join('') == chosenWord) {
            alert('You Win!');
            wins++;
            reset();
        } 
    }
    else {
        wrongLetter.push(keyword);
        docWrongGuess[0].innerHTML = wrongLetter;
        //guesses--//REDUCE FROM REMAINING NUMBER OF GUESSES;
    }  
}); 

docUnderScore[0].innerHTML = generateUnderscore().join('-');




    //Check to see if user word matches guesses -> trigger win/loss
        //if(underScore.join('') == chosenWord) {
           // alert('You Win!');
            //wins++;
            //reset();
            //document.getElementById("winstracker").innerHTML = " " + wins;
       // } else if (lives === 0) {
            //losses++;
            //reset()
        //}
   /// }
   // else {
        //wrongLetter.push(keyword);
        //docWrongGuess[0].innerHTML = wrongLetter;
        //lives = //REDUCE FROM REMAINING NUMBER OF GUESSES;
    ////}  
//}); 

docUnderScore[0].innerHTML = generateUnderscore().join('-');




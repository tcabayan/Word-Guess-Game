//Global Variables//
//_____________________________________________________________________________________
//Create an array of words
var word = ['madonna', 'aerosmith', 'eurythmics', 'wham', 'queen', 'blondie', 'clash'];
// Empty array to store the answer as it displays for the user
var underScore = [];
// Empty array to hold all the wrong guesses and display to userGuess
var wrongLetter = [];

//Counter Variables
var wins = 0;
var guessesLeft = 12;

// DOM manipulation
var docUnderScore = document.getElementById("theWord");
var docGuessedLetter = document.getElementById("guessedLetters");
var docLives = document.getElementById("lives");
var docWins = document.getElementById("wins");

//Main//
//______________________________________________________________________________________

//Computer selects word from array
    var randWord = word[Math.floor(Math.random() * word.length)];
    console.log(randWord)
//Grab the current word and break it apart into each individual letter
	randWordLtrs = randWord.split("");
    console.log("The current word's letters are: " + randWordLtrs);
    var numBlanks = randWordLtrs.length
    console.log("The number of letters in the current word is: " + numBlanks);
//Add the correct number of blanks to correspond with the length of the randWord
    randWord.split('').forEach((letter, i)=> {
    console.log('On iteration ' + i + ' letter is equal to ' + letter);
    underScore[i] = '_';
    });
    
//Change HTML elements to display current information
docUnderScore.textContent = underScore.join(" ");
docLives.textContent = "Number of Guesses Remaining: " + " " + guessesLeft;
docWins.textContent = "Wins: " + " " + wins;


document.addEventListener('keyup', (event) => {
    var ltrGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("You Guessed the letter: " + ltrGuessed); // Testing via Console.Log
    if (randWord.indexOf(ltrGuessed)> -1){
        randWord.split('').forEach((letter, i)=> {
            if(letter === ltrGuessed){
                underScore[i] = ltrGuessed;
                docUnderScore.textContent = underScore.join('');
            } 
            
            else  {
               docGuessedLetter.textContent = wrongLetter.join('_');
               guessesLeft--; 
            }
        });           
    }; 

//Check to see if round is complete
    if (randWordLtrs.toString() === underScore.toString()) {
    wins++;
    alert("CONTRATULATIONS! You guessed '" + randWord + "' correctly. Try another round?");
    console.log("YOU WIN!");
    // Update the wins in the HTML doc
    doc.wins.textContent = "Wins: " + " " + wins;
    //Start New Game and clear letters already guessed
    } else if (guessesLeft === 0) { //Check if user lost
    alert("OH NO! You have 0 guesses left. The correct word was '" + randWord + "'. Do you want to try again?")
    console.log("You Lost!");
    //Start New Game
    }
});


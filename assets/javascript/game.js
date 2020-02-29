//Global Variables//
//_____________________________________________________________________________________
//Create an array of words
var word = ['madonna', 'aerosmith', 'wham', 'queen', 'blondie', 'clash', 'eurythmics'];
var underScore = [];
var wrongLetter = [];
var randWord;
var randWordLtrs;
var numBlanks;


//Counter Variables
var wins = 0;
var guessesLeft;

// DOM manipulation
var docUnderScore = document.getElementById("theWord");
var docGuessedLetter = document.getElementById("guessedLetters");
var docGuessesLeft = document.getElementById("guessesLeft");
var docWins = document.getElementById("wins");

//Main//
//______________________________________________________________________________________
function newGame() {
//clear words under current letter
    underScore = [];
//Computer selects word from array
    randWord = word[Math.floor(Math.random() * word.length)];
    console.log(randWord)
//Grab the current word and break it apart into each individual letter
	randWordLtrs = randWord.split("");
    console.log("The current word's letters are: " + randWordLtrs);
    var numBlanks = randWordLtrs.length
    console.log("The number of letters in the current word is: " + numBlanks);
//Reset game variables needed to be cleared before each new game starts
    guessesLeft = 12;
    wrongLetter = [];
    underscore = [];
//Add the correct number of blanks to correspond with the length of the randWord
    randWord.split('').forEach((letter, i)=> {
    console.log('On iteration ' + i + ' letter is equal to ' + letter);
    underScore[i] = '_';
    });
//Change HTML elements to display current information
    docUnderScore.textContent = underScore.join(" ");
    docGuessesLeft.textContent = "Number of Guesses Remaining: " + " " + guessesLeft;
    docWins.textContent = "Wins: " + " " + wins;
}


newGame();

document.addEventListener('keyup', (event) => {
    var ltrGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("You Guessed the letter: " + ltrGuessed); // Testing via Console.Log
    if (randWord.indexOf(ltrGuessed) > -1) {
        randWord.split('').forEach((letter, i)=> {
            if(letter === ltrGuessed){
                underScore[i] = ltrGuessed;
                console.log(underScore);
                docUnderScore.textContent = underScore.join(' '); 
            }
        }); 
    } else {
        wrongLetter.push(ltrGuessed); 
        docGuessedLetter.textContent = wrongLetter.join('_');
        guessesLeft--; 
        docGuessesLeft.textContent = "Number of Guesses Remaining: " + " " + guessesLeft;
    }          

    //Check to see if round is complete
    if (randWordLtrs.toString() === underScore.toString()) {
    wins++;
    docWins.textContent = "Wins: " + " " + wins;
    alert("CONTRATULATIONS! You guessed '" + randWord + "' correctly. Try another round?");
    console.log("YOU WIN!");
    // Update the wins in the HTML doc
    docWins.textContent = "Wins: " + " " + wins;
    //Start New Game 
    newGame();
    docGuessedLetter.textContent = "Letters Already Guessed:" + " " + " ";
    } else if (guessesLeft === 0) { //Check if user lost
    alert("OH NO! You have 0 guesses left. The correct word was '" + randWord + "'. Do you want to try again?")
    console.log("You Lost!");
    //Start New Game
    newGame();
    docGuessedLetter.textContent = "Letters Already Guessed:" + " " + " ";
    }
});


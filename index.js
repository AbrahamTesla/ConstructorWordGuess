const word = require("./word");
const inquirer = require("inquirer");

// var blanksAndSuccesses = [];
// var lettersChosenTeam = [];
var worldCupTeam = ["Portugal","Spain","Germany","Japan","Korea","Senegal","Russia","Morocco","Egypt","Iran","Colombia","Uruguay","Argentina","Australia","Belgium","Brazil","Costa Rica","Croatia","Denmark","England","France","Iceland","Mexico","Nigeria","Panama","Peru","Poland","Saudi Arabia","Senegal","Serbia","Sweden","Switzerland","Tunisia"];


// var incorrectLetters = [];
var guessListArray = [];

var guessesLeft = 10;
var computerWord;

// To start the game.  Setting up guessleft = 10, empty guesslistArray on start
//then running the makeRandomeWords method
function start(){
    
   guessessLeft = 10;
   var guessListArray = [];
   makeRandomWords();

};
//Defining RandomWords method
function makeRandomWords(){
    var randomTeam = Math.floor(Math.random()*worldCupTeam.length);
    var chooseRandomTeam = worldCupTeam[randomTeam];
    computerWord = new word(chooseRandomTeam);

    guessLetter();
}; 
//Defining guess letter
function guessLetter(){
    //outputing the object computerWord
    console.log(computerWord);
    //outputing the underscore
    console.log(computerWord.beString())
 
    inquirer.prompt([
        { 
            name: "letter",
            type: "input",
            message: "Guess a letter from A-Z"
        }      
      ]).then(function(userInput){

        //Using indexOf>-1 meaning searching for the letter already exists
        if(guessListArray.indexOf(userInput.letter)>-1){
            console.log("You already guess that letter. Please enter another one.");
            guessLetter();
        }
        //Using indexOf = -1 if the letter doesn't exist. Push the letter userInput to guessListArray
        else if(guessListArray.indexOf(userInput.letter)=== -1){
             guessListArray.push(userInput.letter);
             console.log(guessListArray);
            
             //Checking if the letter exist, if it exist let it remain in the field as one of the guess letter
             computerWord.checkVal(userInput.letter);
             
             guessLetter();
         }
      //Using indexOf to find "underscore". Set up to -1, means if underscore doesn't exist
      //means you have solve the randomword to be guess.
      if(computerWord.beString().indexOf('_') === -1){
          console.log("You got it!");
      }
      });
}


// function restartGame(){
//     inquirer.prompt([
//         {
//         type: "list",
//         message: "Would you like to play again?",
//         choices: ["Play Again", "Exit"],
//         name: "restart"
//         }
//     ]).then(function(input){
//         if(input.restart==="Play Again"){
//             guessListArray = []   
//             guessesLeft = 10;
//             start();
//         }
//     })
// }


start();
// **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

const Character = require("./letter");

function Word (word){
   this.wordArr=[];

   //loop thru each letter of the word. Indexing it.
   for(var i=0;i<word.length;i++){
       var char = new Character(word[i]);
       this.wordArr.push(char);
   }
   //concatanetting each letter or underscore
   this.beString = function(){
       var wordString = '';
       for (var i=0;i<this.wordArr.length;i++){
          wordString += this.wordArr[i].Guess() + " ";
       }
       return wordString;
   }
   this.checkVal = function(userGuess){
       for(var i = 0; i<this.wordArr.length;i++){
        this.wordArr[i].checkChar(userGuess);
       }
   }
   
}

// var tWord = new Word("code");
// console.log(tWord);
// console.log(tWord.beString());
// tWord.checkVal("o");
// console.log(tWord.beString());


module.exports = Word;
// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  
//   * **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`
//   * Letter.js` *should not* `require` any other files.
//   * `Word.js` *should only* require `Letter.js`
//   * HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)


function Character(letter){
    this.letter = letter.toString(),
    this.isGuessed = false,
    this.Guess = function(){
        return this.isGuessed ? this.letter : "_";
        // if(this.isGuessed){
        //     return this.letter;
        // }else{
        //     return "_";
        // }
    }
    this.checkChar = function(val){
        if(val.toLowerCase()===this.letter || val.toUpperCase() === this.letter){
           return this.isGuessed=true;
        }
    }
}

module.exports = Character;


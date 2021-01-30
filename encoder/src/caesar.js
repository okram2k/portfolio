// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  //alphabet array to be used for number to letter conversion and vice versa
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function letterToNumber(letter){
    //input a letter, determine it's spot on the alphabet, return the number ex( a -> 0)
    let output = 0;
      for (let i = 0; i < 26; i++){
        if (alphabet[i] == letter){
          output = i;
        }
      }
    return output;
  }
  function numberToLetter(number){
    //input a number and return the corresponding letter ex (0 -> a)
    return alphabet[number];
  }


  function caesar(input, shift, encode = true) {
    // your solution code here


    //check shift to match requirements, it must exist, must not equal zero, and must be betweeen -25 & 25 otherwise return false
    if (!shift || shift === 0 || shift < -25 || shift >25){
      return false;
    }
    //if encode is true, reverse the shift to go the opposite direction
        // make input lower case for ease of translation
    input = input.toLowerCase();
    if (encode == true){
      shift = shift * -1;
    }
    //split the string up into an array of each word
    let message = input.split(" ");
    let newMessage = [];

    message.forEach((word) => {
      let newWord = [];
      //split up each word by character
      let splitWord = word.split("");
      splitWord.forEach((character) =>{
      //check if each character is a letter:
      if (character.toLowerCase() != character.toUpperCase()){
        //convert character to number
        character = letterToNumber(character);
        //add shift to the number
        character -= shift;
        //if the number is out of 0-25 adjust by 26
        if (character < 0 ){
          character = character += 26;
        }
        if (character > 25){
          character = character -= 26;
        }
        //convert number back to a letter
        character = numberToLetter(character);
        
      }
        newWord.push(character);
      });
      newWord = newWord.join("");
      newMessage.push(newWord);
    });
    
    //put letters back together as words then words back together seperated by spaces
    newMessage = newMessage.join(" ");
    //return the final string
    return newMessage;
    
  
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

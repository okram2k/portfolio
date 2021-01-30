// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //polybuys square, [1][1] should equal a, [5][5] should equal z
  let square = [["ERR"],
  ["ERR", "a", "f", "l", "q", "v"],
  ["ERR", "b", "g", "m", "r", "w"],
  ["ERR", "c", "h", "n", "s", "x"],
  ["ERR", "d", "(i/j)", "o", "t", "y"],
  ["ERR", "e", "k", "p", "u", "z"]];
  function letterToNumber(letter){
    //input a letter, return a corresponding number that matches on the polybius square
    let output = 00;
    for (let i = 0; i < square.length; i++){
      for (let j= 0; j < square[i].length; j++){
        if (square[i][j] === letter){
          output = i*10 + j;
        }
      }
    }
    //exception for i or j
    if (letter == 'i' || letter == 'j'){
      output = 42;
    }
    return output;
  }
  function numberToLetter(number){
    //input a number, retun a corresponding letter that matches on the polybius square
    let i = Math.floor(number / 10);
    let j = number - (i * 10);
    return square[i][j];
  }
  function polybius(input, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    //split the string up into an array of each word
    let message = input.split(" ");
    let newMessage = [];
    let flag = false;
    message.forEach((word) => {
      let newWord = [];
      //split up each word by character
      let splitWord = word.split("");
      if(encode === false){
        //check to make sure words are even, if a word is uneven the conversion won't work and should output false
        console.log(Math.floor(splitWord.length/2));
        console.log(splitWord.length/2);
        if ((Math.floor(splitWord.length/2)) != (splitWord.length/2)){
          flag = true;
        }
        let temp = [];
        for (let i = 0; i < splitWord.length; i += 2){
          temp.push(parseInt(splitWord[i]+splitWord[i+1]));
        }
        console.log(temp);
        splitWord = temp;
      }
      splitWord.forEach((character) =>{
      //check if each character is a letter:
        //if encoded is true convert character to number
        if (encode === true){
          character = letterToNumber(character);
        } else {
          //else convert number back to a letter
          character = numberToLetter(character);
        }
        newWord.push(character);
      });
      newWord = newWord.join("");
      newMessage.push(newWord);
    });
    
    //put letters back together as words then words back together seperated by spaces
    newMessage = newMessage.join(" ");
    //return the final string as long as the rror flag has not been changed to true
    if (flag === false){
      return newMessage;
    } else {
      return false;
    }

    
  }

  return {
    
    polybius,
  };
})();

module.exports = polybiusModule.polybius;

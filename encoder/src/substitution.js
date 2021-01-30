// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function codeIt(letter, alphabet){
    //this function inputs a letter and the alphabet array. It finds the number in the order
    //associated with that letter and then matches it up witht he alphabet 'code' Outputting the new symbol.
    let output="";
    for (let i = 0; i < alpha.length; i++){
      if (alpha[i] == letter){
        output = alphabet[i];
      }
    }
  return output;
  }

  function decode(letter,alphabet){
    //this function inputs a letter and the alphabet array and finds the matching number in order associated with that
    //letter int he alphabet array, then converts it to the standard alphabet.
    let output="";
    for (let i = 0; i < alphabet.length; i++){
      if (alphabet[i] == letter){
        output = alpha[i];
      }
    }
  return output;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //slice up the alphabet into an array
    //make sure alphabet exists, if not return false
    if (!alphabet){
      return false;
    }
    alphabet = alphabet.slice("");
    //check if the alphabet array is at least 26 units long, if not return false

    if (alphabet.length < 26){
      return false;
    }
    //cycle through alphabet twice to see if any characters are duplicates. return false if they are (and i and j aren't pointing at the same place)
    for (let i = 0; i < alphabet.length; i++){
      for (let j = 0; j < alphabet.length; j++){
        
        if (alphabet[i] === alphabet[j] && i != j){
          return false;
        }
      }
    }
    //set up an empty output to dump into
    let output = [];
    //make input lower case
    input = input.toLowerCase();
    //split up input by word
    let sentence = input.split(" ");
    console.log(sentence);
    sentence.forEach((word) =>{
      //then split up input by character
      let letters = word.split("");
      let outputword = [];
      letters.forEach((character) =>{
        //if encode is true run the encoder
        if (encode === true){
          outputword.push(codeIt(character, alphabet));
        } else {
          //if encode is false runt he decoder
          outputword.push(decode(character, alphabet));
        }
      });
      //rebuild the word
      outputword = outputword.join("");
      output.push(outputword);
    });
       //rebuild the sentence
    output = output.join(" ");
 
    //output it
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

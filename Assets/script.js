// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperAlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlphaString = "abcdefghijklmnopqrstuvwxyz";
var numbersString = "0123456789"
var specialCharString = "!()?[]`~;:!@#$%^&*+=";

var upperAlphaArray = Array.from(upperAlphaString)
var lowerAlphaArray = Array.from(lowerAlphaString)


console.log(upperAlphaArray)
console.log(upperAlphaArray[Math.floor(Math.random() * upperAlphaArray.length)])
console.log(upperAlphaArray[Math.floor(Math.random() * upperAlphaArray.length)])
console.log(upperAlphaArray[Math.floor(Math.random() * upperAlphaArray.length)])
console.log(upperAlphaArray[Math.floor(Math.random() * upperAlphaArray.length)])


////////////////////Functions////////////////////////

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//////////////////////////////////////////////////



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//button
//Then prompts for criteria, user selects
//Then prompts for length, choice between 8 and 128
//Then prompts for character types
//If yes for upper case, 

//for loop for length of the password they chose
//each iteration of the loop 



// preventDefault() somewhere to prevent page from refreshing
// clear the "your secure password" placeholder
// random character generator
// random num generator
// random lower
// random upper
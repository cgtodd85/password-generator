// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperAlphaVar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlphaVar = "abcdefghijklmnopqrstuvwxyz";
var numbersVar = "0123456789"
var specialCharVar = "!()?[]`~;:!@#$%^&*+=";


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



// preventDefault() somewhere to prevent page from refreshing
// clear the "your secure password" placeholder
// random character generator
// random num generator
// random lower
// random upper
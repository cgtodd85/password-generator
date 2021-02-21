// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperAlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlphaString = "abcdefghijklmnopqrstuvwxyz";
var numbersString = "0123456789"
var specialCharString = "!()?[]`~;:!@#$%^&*+=";



////////////////////Functions////////////////////////

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //prompt user for amount of characters
  var userString = ""
  var userLength = window.prompt("Enter desired length of password from 8 to 128 characters.");
  var passLength = parseInt(userLength); 
  
  var upperAlphaChoice = window.prompt("Do you want to include upper case letters? Type y or n")
  var lowerAlphaChoice = window.prompt("Do you want to include lower case letters? Type y or n")
  var numbersChoice = window.prompt("Do you want to include numbers? Type y or n")
  var specialCharChoice = window.prompt("Do you want to include special characters? Type y or n")

  if (upperAlphaChoice === "y") {
    userString += upperAlphaString
  }
  if (lowerAlphaChoice === "y") {
    userString += lowerAlphaString
  }
  if (numbersChoice === "y") {
    userString += numbersString
  }
  if (specialCharChoice === "y") {
    userString += specialCharString
  }

  var userArray = Array.from(userString)
  var finalPassword = selectFromArray (passLength, userArray)  
  return finalPassword;
}

function selectFromArray (x, y) {
  var stringPassword = "";
  for (var i = 0; i < x; i++) {
    var randomChar = y[Math.floor(Math.random() * y.length)];
    stringPassword += randomChar;
  }
  return stringPassword;
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
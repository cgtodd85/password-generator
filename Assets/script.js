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
  //prompts user for amount of characters
  var userString = ""
  var userLength = window.prompt("Enter desired length of password from 8 to 128 characters.");
  
  //Turns user entry into a number
  var passLength = parseInt(userLength); 
  
  //Asks user for input on character types they wish to use in the password
  var upperAlphaChoice = window.prompt("Do you want to include upper case letters? Type y or n")
  var lowerAlphaChoice = window.prompt("Do you want to include lower case letters? Type y or n")
  var numbersChoice = window.prompt("Do you want to include numbers? Type y or n")
  var specialCharChoice = window.prompt("Do you want to include special characters? Type y or n")

  

  //Each if statement results in a string of characters added to the master character list "userString"
  if (upperAlphaChoice === "y" || upperAlphaChoice === 'Y') {
    userString += upperAlphaString;
  }
  if (lowerAlphaChoice === "y" || lowerAlphaChoice === 'Y') {
    userString += lowerAlphaString;
  }
  if (numbersChoice === "y" || numbersChoice === 'Y') {
    userString += numbersString;
  }
  if (specialCharChoice === "y" || specialCharChoice === 'Y') {
    userString += specialCharString;
  }
  
  //If no character types selected then the process will restart
  if (userString === "") {
    window.alert("Please select at least one character type! Press ok to restart");
    location.reload;
  }

  //Creates an array from the concatanated string of user selected characters
  var userArray = Array.from(userString)
  //The function to create the final password passes the args passLength and userArray
  var finalPassword = selectFromArray (passLength, userArray)  
  return finalPassword;
}

//This function selects random indexes from the userArray, and concatanates each character at 
//that index to a final string for the password
function selectFromArray (x, y) {
  var stringPassword = "";
  for (var i = 0; i < x; i++) {
    var randomChar = y[Math.floor(Math.random() * y.length)];
    stringPassword += randomChar;
  }
  return stringPassword;
}

//////////////////////////////////////////////////



generateBtn.addEventListener("click", writePassword);

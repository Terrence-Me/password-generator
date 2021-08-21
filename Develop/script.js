// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userInput = Number(
    prompt("How many characters would you like? (between 8 - 129)")
  );
  if (
    userInput < 8 ||
    userInput > 128 ||
    userInput === "" ||
    isNaN(userInput)
  ) {
    alert("You must enter number length greater than 7 but less than 129");
    return;
  }

  var specialCharactersConfirm = confirm("Would you like Special Characters?");
  var numericCharactersConfirm = confirm("Would you like Numeric Characters?");
  var lowerCaseComfirm = confirm("Would you like Lowercase Letters?");
  var upperCaseConfirm = confirm("Would you like Uppercase Letters?");

  var specialCharacters = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
  ];

  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var passwordOptions = [];
  var password = [];

  if (specialCharactersConfirm === true) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  }

  if (numericCharactersConfirm === true) {
    passwordOptions = passwordOptions.concat(numericCharacters);
  }

  if (lowerCaseComfirm === true) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }

  if (upperCaseConfirm === true) {
    passwordOptions = passwordOptions.concat(upperCase);
    console.log(passwordOptions);
  }

  for (var i = 0; i < userInput; i++) {
    var randomNumber = Math.floor(Math.random() * passwordOptions.length - 1);
    var randomCharacters = passwordOptions[randomNumber];
    password.push(randomCharacters);
  }
  var passwordText = document.querySelector("#password");
  var actualPassword = password.join("");
  passwordText.value = actualPassword;

  console.log(password);
  console.log(userInput);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

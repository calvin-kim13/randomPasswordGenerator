// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Criteria
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var number = ["0123456789"];
var special = ["!@#$%^&*+?<>/"];

// generatePassword function created
function generatePassword () {
  var passwordLength = window.prompt("Enter your desired password length between 8-128 characters.");

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid password length between 8-128 characters.");

    var passwordLength = window.prompt("Enter your desired password length between 8-128 characters.");
  }

  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("Your password will be " + passwordLength + " characters long.");
  }

  var includeLowercase = window.confirm("Press 'Ok' if you would like to include lowercase characters in your password. Press 'Cancel' if you do not want to include it.");
  var includeUppercase = window.confirm("Press 'Ok' if you would like to include uppercase characters in your password. Press 'Cancel' if you do not want to include it.");
  var includeNumber = window.confirm("Press 'Ok' if you would like to include numbers in your password. Press 'Cancel' if you do not want to include it.");
  var includeSpecial = window.confirm("Press 'Ok' if you would like to include special characters in your password. Press 'Cancel' if you do not want to include it.");

  while (includeLowercase !== true && includeUppercase !== true && includeNumber !== true && includeSpecial !== true) {
    window.alert("Error. You must select at least one option. Try again.");

    var includeLowercase = window.confirm("Press 'Ok' if you would like to include lowercase characters in your password. Press 'Cancel' if you do not want to include it.");
    var includeUppercase = window.confirm("Press 'Ok' if you would like to include uppercase characters in your password. Press 'Cancel' if you do not want to include it.");
    var includeNumber = window.confirm("Press 'Ok' if you would like to include numbers in your password. Press 'Cancel' if you do not want to include it.");
    var includeSpecial = window.confirm("Press 'Ok' if you would like to include special characters in your password. Press 'Cancel' if you do not want to include it.");
  }

  var passwordCriteria = []
    if (includeLowercase === true) {passwordCriteria += lowercase};
    if (includeUppercase === true) {passwordCriteria += uppercase};
    if (includeNumber === true) {passwordCriteria += number};
    if (includeSpecial === true) {passwordCriteria += special};

  var randomizingPassword = ""
    for (var i = 0; i < passwordLength; i++) {
      randomizingPassword += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
    }

  return randomizingPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


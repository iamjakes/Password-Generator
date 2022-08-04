// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numberArray = ['1','2','3','4','5','6','7','8','9']
var specialArray = ["!","#","$","%","&","'","(",")","*","+","-",".","/",";",":","=",">","?","@","{","}","[","]","^","_","`","|","~","]"]

function confirmPasswordOptions() {
  var length = parseInt(
    window.prompt("How many characters would you like your password to have? 8-128")
  );
  if (Number.isNaN(length)) {
    alert("Must enter number!");
    return null;
  }
  if (length < 8) {
    alert("Password must be at least 8 characters");
    return null;
  }
  if (length > 128) {
    alert("Password must be below 129 characters"); 
      return null
    }
  
  var hasSpecial = confirm("Click OK if you would like to add special characters");
  var hasNumbers = confirm("Click OK if you would like to add numbers");
  var hasUpper = confirm("Click OK if you would like to add uppercase characters");
  var hasLower = confirm("Click OK if you would like to add lowercase charcaters");

  if (
    hasSpecial === false &&
    hasNumbers === false &&
    hasUpper === false &&
    hasLower === false 
  ) {
    alert("Must choose at least one character type!");
    return null;
  }

  var passOptions = {
    length: length, 
    hasSpecial: hasSpecial,
    hasNumbers: hasNumbers,
    hasUpper: hasUpper,
    hasLower: hasLower
  };

  return passOptions;
}

function randomizePass(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomChar = arr[randomIndex];
  return randomChar;
} 


function generatePassword() {
    var passwordOptions = confirmPasswordOptions();
    var possibleCombo = [];
    var finalPassword = "";
  
     if (passwordOptions.hasNumbers) {
      for (var i of numberArray)
        possibleCombo.push(i);
    }
    if (passwordOptions.hasLower) {
      for (var i of lowercaseArray)
        possibleCombo.push(i);
    }
    if (passwordOptions.hasUpper) {
      for (var i of uppercaseArray)
        possibleCombo.push(i);
    }
    if (passwordOptions.hasSpecial) {
      for (var i of specialArray)
        possibleCombo.push(i);
    }
  
  
    console.log(possibleCombo);
  
  
    for (var i = 0; i < passwordOptions.length; i++) {
      finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
      
    }
    console.log(finalPassword);
  
    return finalPassword;
  }

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

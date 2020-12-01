
var generateBtn = document.querySelector("#generate");


var passwordCharacters = {
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  specialChar: ["!", "@", "#", "$", "%", "^", "&", "*"],
  charactersNeeded: [],
}

console.log(passwordCharacters);


function generatePassword() {
  var passLength = prompt("How long should your password be? (must be between 8-100 characters)");
  var passUpper = confirm("Should your password include upper case letters?");
  var passLower = confirm("Should your password include lower case letters?");
  var passNum = confirm("Should your password include numbers?");
  var passSpecial = confirm("Should your password include special characters?");

  if (passLength < 8 || passLength > 100) {
    alert("Please enter a password length between 8 and 100");
    return;
  }

  if (passUpper === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.upperCase.concat(passwordCharacters.charactersNeeded);
    console.log(passwordCharacters.charactersNeeded)
  }

  if (passLower === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.lowerCase.concat(passwordCharacters.charactersNeeded);
    console.log("yes to lowercase:", passwordCharacters.charactersNeeded)
  }

  if (passNum === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.numbers.concat(passwordCharacters.charactersNeeded);
    console.log("yes to nums:", passwordCharacters.charactersNeeded)
  }

  if (passSpecial === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.specialChar.concat(passwordCharacters.charactersNeeded);
    console.log("yes to chars needed:", passwordCharacters.charactersNeeded)
  }

  var array = passwordCharacters.charactersNeeded;
  console.log(passLength);

  var num;
  var finalArray = [];
  for (let index = 0; index < passLength; index++) {

    num = Math.floor(Math.random() * array.length)
    element = array[index]

    finalArray.push(element)
  }
  return finalArray.join(" ");
}


function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
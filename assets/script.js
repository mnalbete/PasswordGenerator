var generateBtn = document.querySelector("#generate");

var caseArray = [];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];


generateBtn.addEventListener("click", function (event) {
  var generateButton = document.getElementById("generate");
  generatePassword();
});

function generatePassword() {
  var passLength = prompt("How long should your password be?");
  var passUpper = confirm("Should your password include upper case letters?");
  var passLower = confirm("Should your password include lower case letters?");
  var passNum = confirm("Should your password include numbers?");
  var passSpecial = confirm("Should your password include special characters?");

  if (passUpper === true) {
    caseArray.push(upperCase);
  };

  if (passLower === true) {
    caseArray.push(lowerCase);
  };

  if (passNum === true) {
    caseArray.push(numbers)
  };

  if (passSpecial === true) {
    caseArray.push(specialChar)
  };

  for (var i = 0; i < passLength; i++) {
    var randomCharArrayNum;
    var selectedCharArray;
    var randomCharNum;
    var randomChar;

    randomCharArrayNum = parseInt(Math.floor(Math.random() * caseArray.length));
    selectedCharArray = caseArray[randomCharArrayNum];
    randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
    randomChar = selectedCharArray[randomCharNum];
    passwordString = randomChar;
  };
  document.getElementById("password").value= generatePassword;
};


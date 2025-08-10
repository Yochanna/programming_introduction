var words = [ "javascript", "monkey", "amazing", "pancake" ];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i = i + 1) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
  if (guess === null) {
    break;  
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    for (var j = 0; j < word.length; j = j + 1) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters = remainingLetters - 1;
      }
    }
  }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);





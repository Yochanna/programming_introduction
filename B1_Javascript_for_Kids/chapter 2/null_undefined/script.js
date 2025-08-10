var checkButton   = document.getElementById('check-button');
var resultPara    = document.getElementById('result');


var age          = 12;
var accompanied  = true;

checkButton.onclick = function() {
  var message;

  if (age >= 13) {
    message = 'You are ' + age + ' you may see the movie!';
  }
  else if (accompanied) {
    message = 'You are ' + age + ' but accompanied you may see the movie!';
  }
  else {
    message = 'Sorry, you are ' + age + ' and not accompanied you cannot see the movie.';
  }

  
  resultPara.innerText = message;
  
  console.log(message);
};


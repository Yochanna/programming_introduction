
var button = document.getElementById('ask-ready-button');
var output = document.getElementById('confirm-output');

button.onclick = function() {
  var ready = confirm("Are you ready to start the game?");
  if (ready) {
    output.innerText = "Great—let's begin!";
  } else {
    output.innerText = "No worries. Take your time.";
  }
};




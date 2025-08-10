var button = document.getElementById('ask-name-button');
var output = document.getElementById('name-output');

button.onclick = function() {
  var name = prompt("Hi there! What's your name?");
  if (name) {
    output.innerText = "Hello, " + name + "!";
  } else {
    output.innerText = "You didn't tell me your name.";
  }
};





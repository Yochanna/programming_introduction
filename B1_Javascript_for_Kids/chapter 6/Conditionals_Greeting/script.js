var input      = document.getElementById('name-input');
var button     = document.getElementById('greet-button');
var output     = document.getElementById('greeting-output');

var myName     = "Yana";
var carName    = "BMW";
var cityName   = "Tshwane";

button.onclick = function() {
  var name = input.value.trim();
  var message;

  if (name === myName) {
    message = "Hello me!";
  }
  else if (name === carName) {
    message = "Hi BMW!";
  }
  else if (name === cityName) {
    message = "Hi Tshwane!";
  }
  else {
    message = "Hello stranger!";
  }


  output.innerText = message;

  console.log(message);
};





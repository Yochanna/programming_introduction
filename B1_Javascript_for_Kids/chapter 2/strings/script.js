
var button = document.getElementById('join-button');
var output = document.getElementById('output');

button.onclick = function() {
  var greeting = 'Hello ';  
  var name     = 'Nick';
  var message  = greeting + name; 

  
  output.innerText = message;

  
  console.log(message);
};

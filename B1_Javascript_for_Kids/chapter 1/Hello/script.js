var button  = document.getElementById('hello-button');
var message = document.getElementById('message-paragraph');

button.onclick = function() {
  var greeting = '👋 Hello!';

  message.innerText = greeting;


  console.log(greeting);
};


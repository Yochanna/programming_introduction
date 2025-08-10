var wordsBox   = document.getElementById('words-input');
var button     = document.getElementById('pick-button');
var output     = document.getElementById('output-area');

button.onclick = function() {
  var text = wordsBox.value;               
  var list = text.split(',');              
  var index = Math.floor(Math.random() * list.length);
  var word  = list[index].trim();          

  
  output.innerText = word;
};




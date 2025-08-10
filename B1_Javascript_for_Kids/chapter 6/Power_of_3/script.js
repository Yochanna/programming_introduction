var forButton   = document.getElementById('for-loop-button');
var whileButton = document.getElementById('while-loop-button');
var output      = document.getElementById('output-area');

forButton.onclick = function() {
  output.innerText = '';  

  for (var value = 3; value < 10000; value = value * 3) {
    var line = value;
    
    output.innerText += line + '\n';
    
    console.log(line);
  }
};

whileButton.onclick = function() {
  output.innerText = '';  

  var value = 3;
  while (value < 10000) {
    var line = value;
    
    output.innerText += line + '\n';
    
    console.log(line);
    value = value * 3;
  }
};




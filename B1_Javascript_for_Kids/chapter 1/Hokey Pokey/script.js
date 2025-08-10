var button = document.getElementById('run-loop-button');
var output = document.getElementById('output-area');

button.onclick = function() {
  output.innerText = '';  

  for (var i = 0; i < 10; i = i + 1) {
    var line = i + ': Do the Hokey Pokey';
    
    output.innerText += line + '\n';
    
    console.log(line);
  }
};


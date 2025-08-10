var box     = document.getElementById('count-input');
var button  = document.getElementById('draw-button');
var display = document.getElementById('output-area');

button.onclick = function() {
  display.innerText = '';  

  for (var i = 0; i < box.value; i = i + 1) {
    var line = i + ' =^.^=';
    
    display.innerText += line + '\n';
    
    console.log(line);
  }
};





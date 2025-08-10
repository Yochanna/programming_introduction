
var countBox = document.getElementById('count-input');
var textBox  = document.getElementById('text-input');
var button   = document.getElementById('print-button');
var output   = document.getElementById('output-area');

function printMultipleTimes(howManyTimes, whatToDraw) {
  var result = '';
  for (var i = 0; i < howManyTimes; i = i + 1) {
    var line = i + ' ' + whatToDraw;
    result += line + '\n';
    console.log(line);
  }
  return result;
}

button.onclick = function() {
  output.innerText = printMultipleTimes(countBox.value, textBox.value);
};




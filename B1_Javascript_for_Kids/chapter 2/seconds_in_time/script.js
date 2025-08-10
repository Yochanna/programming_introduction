var button = document.getElementById('calc-seconds-button');
var output = document.getElementById('output-area');

button.onclick = function() {
  output.innerText = '';  

  var secondsInMinute = 60;
  var secondsInHour   = secondsInMinute * 60;
  var secondsInDay    = secondsInHour * 24;
  var secondsInYear   = secondsInDay * 365;

  var lines = [
    'Seconds in an hour: ' + secondsInHour,
    'Seconds in a day:  ' + secondsInDay,
    'Seconds in a year: ' + secondsInYear
  ];

  for (var i = 0; i < lines.length; i = i + 1) {
    var line = lines[i];
    
    output.innerText += line + '\n';
    
    console.log(line);
  }
};




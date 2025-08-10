var owedMoney = {};
owedMoney.Alice = 50;
owedMoney.Bob   = 75;

owedMoney.Alice = owedMoney.Alice - 20;

var button = document.getElementById('run-button');
var output = document.getElementById('output-area');

button.onclick = function() {
  output.innerText = ''; 

  for (var name in owedMoney) {
    var line = name + ' is owed R' + owedMoney[name];
    
    output.innerText += line + '\n';
    
    console.log(line);
  }
};





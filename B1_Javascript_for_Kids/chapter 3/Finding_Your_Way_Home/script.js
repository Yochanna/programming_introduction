var landmarks    = [];
var goButton     = document.getElementById('go-button');
var returnButton = document.getElementById('return-button');
var output       = document.getElementById('output-area');

goButton.onclick = function() {
  landmarks = [];               
  output.innerText = '';        

    landmarks.push('Park');
  logStep('At Park');

  landmarks.push('School');
  logStep('At School');

  landmarks.push('Shop');
  logStep('At Shop');

  landmarks.push('Friend House');
  logStep('At Friend House');
};

returnButton.onclick = function() {
  output.innerText += '\nOn the way back:\n';
  console.log('On the way back:');

  while (landmarks.length > 0) {
    var place = landmarks.pop();
    logStep('Passing ' + place);
  }
};


function logStep(text) {
  output.innerText += text + '\n';
  console.log(text);
}



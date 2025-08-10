var button = document.getElementById('add-button');
var result = document.getElementById('result-paragraph');

button.onclick = function() {
  
  var sum = 3 + 4;

  
  result.innerText = '3 + 4 = ' + sum;

  
  console.log('3 + 4 =', sum);
};



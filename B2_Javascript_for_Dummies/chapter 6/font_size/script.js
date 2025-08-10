
var button = document.getElementById('grow-button');

button.onclick = function() {
  var paras = document.getElementsByTagName('p');
  for (var i = 0; i < paras.length; i = i + 1) {
    paras[i].style.fontSize = '2.5em';
    console.log('Paragraph ' + (i+1) + ' font size:', paras[i].style.fontSize);
  }
};





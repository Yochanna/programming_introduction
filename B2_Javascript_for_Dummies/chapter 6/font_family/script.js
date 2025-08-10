

var button = document.getElementById('font-button');

button.onclick = function() {
  var newFont = '"Comic Sans MS", cursive, sans-serif';
  document.body.style.fontFamily = newFont;
  console.log('Font family set to:', document.body.style.fontFamily);
};





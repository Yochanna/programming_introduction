
var fields = [
  'adjective1','verbIng1','roomInHouse','color1','noun1',
  'verbIng2','adjective2','noun2','number1','adjective3',
  'color2','adjective4','pluralNoun','verbPast','adverb1',
  'genre'
];

var genBtn     = document.getElementById('generate');
var replayBtn  = document.getElementById('playAgain');
var storyDiv   = document.getElementById('story');

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = array[i]; array[i] = array[j]; array[j] = tmp;
  }
  return array;
}


genBtn.onclick = function() {
  var values = {};

  for (var i = 0; i < fields.length; i++) {
    var id = fields[i];
    var val = document.getElementById(id).value.trim();
    if (!val) {
      alert('Please fill in all fields!');
      return;
    }
    values[id] = val;
  }

  var s = "This morning I woke up feeling " + values.adjective1 +
          ". I started " + values.verbIng1 + " to the " + values.roomInHouse +
          ", where a " + values.color1 + " " + values.noun1 +
          " was " + values.verbIng2 + " in a " + values.adjective2 +
          " way. Suddenly, I spotted " + values.number1 + " " +
          values.adjective3 + " " + values.color2 + " " + values.adjective4 +
          " " + values.pluralNoun + ". Then I " + values.verbPast +
          " very " + values.adverb1 + ". Finally, I heard some " +
          values.genre + " music and smiled.";

  
  var keys      = shuffle(fields.slice());
  var extras    = keys.slice(0,3).map(function(k){ return values[k]; });
  s += "\n\nBy the way, did you know about " + extras.join(', ') + "?";

  
  storyDiv.innerText = s;
  console.log(s);

  
  genBtn.disabled    = true;
  replayBtn.style.display = 'inline-block';
};


replayBtn.onclick = function() {

  for (var i = 0; i < fields.length; i++) {
    document.getElementById(fields[i]).value = '';
  }
  storyDiv.innerText = '';
  genBtn.disabled    = false;
  replayBtn.style.display = 'none';
};

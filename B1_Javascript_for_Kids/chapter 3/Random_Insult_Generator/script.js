var bodyParts  = [ "face", "nose", "hair", "toes", "elbow" ];
var adjectives = [ "smelly", "lazy", "slimy", "ridiculous", "wobbly" ];
var nouns      = [ "pickle", "goblin", "sausage", "turtle", "goat" ];

var button = document.getElementById('insult-button');
var output = document.getElementById('insult-output');

function pickRandomWord(list) {
  var index = Math.floor(Math.random() * list.length);
  return list[index];
}

button.onclick = function() {
  var part   = pickRandomWord(bodyParts);
  var adj    = pickRandomWord(adjectives);
  var noun   = pickRandomWord(nouns);
  var insult = "Your " + part + " is like a " + adj + " " + noun + "!!!";

  output.innerText = insult;

  console.log(insult);
};





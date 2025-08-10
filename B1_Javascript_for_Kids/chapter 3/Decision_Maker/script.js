var adviceList = [
  "Take a deep breath before you act.",
  "Always try your best.",
  "Share a smile with someone today.",
  "Be curious and ask questions.",
  "Take small steps to reach big goals."
];

var button = document.getElementById('decide-button');
var output = document.getElementById('advice-output');

button.onclick = function() {

  var index  = Math.floor(Math.random() * adviceList.length); 
  var advice = adviceList[index];


  output.innerText = advice;

  console.log(advice);
};






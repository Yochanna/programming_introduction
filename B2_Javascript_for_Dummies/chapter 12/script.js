var trainSpeed    = 250;   
var trainPosition = 0;     
var animation;             

var train       = document.getElementById("train");
var track       = document.getElementById("track");
var stopButton  = document.getElementById("stopButton");


train.addEventListener("click", speedUp);

function speedUp() {
  if (trainSpeed > 20) trainSpeed -= 20;  
  console.log("train speed:", trainSpeed, "ms/frame");
  clearInterval(animation);
  animation = setInterval(frame, trainSpeed);
}


function frame() {
  trainPosition += 2;
  train.style.left = trainPosition + "px";
  checkPosition(trainPosition);
}


stopButton.addEventListener("click", stopTrain);

function stopTrain() {
  clearInterval(animation);
  console.log("Train stopped at", trainPosition, "px");
}


function checkPosition(pos) {
  var max = track.clientWidth - train.clientWidth;
  if (pos >= max) {
    clearInterval(animation);
    alert("🚧 Crash! You reached the end.");
    console.log("Crash at", pos, "px");
  }
}



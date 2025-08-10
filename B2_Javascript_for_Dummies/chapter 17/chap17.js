document.getElementById("startCountdownBtn")
  .addEventListener("click", function() {
    var out = document.getElementById("countdownOutput");
    out.textContent = "";
    for (var i = 10; i >= 0; i--) {
      (function(i) {
        setTimeout(function() {
          out.textContent += (i > 0 ? i : "Blast Off!") + "\n";
        }, (10 - i) * 500);
      })(i);
    }
});

var myFriends = ["Agatha","Agnes","Jermaine","Jack"];
document.getElementById("showFriendsBtn")
  .addEventListener("click", function() {
    var out = document.getElementById("friendsOutput");
    out.innerHTML = "";
    for (var i = 0; i < myFriends.length; i++) {
      out.innerHTML += myFriends[i] + " is my friend.<br>";
    }
});

document.getElementById("randomNumberBtn")
  .addEventListener("click", function() {
    var num = Math.random();
    document.getElementById("randomNumberOutput")
            .innerText = "Random: " + num;
});

document.getElementById("randomFriendBtn")
  .addEventListener("click", function() {
    var idx = Math.floor(Math.random() * myFriends.length);
    var pick = myFriends[idx];
    document.getElementById("randomFriendOutput")
            .innerText = "You get: " + pick;
});

var days    = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var weather = ["Sunny","Raining","Cloudy","Thunderstorm"];
var maxTemp = 100, minTemp = 0;

document.getElementById("generateForecastBtn")
  .addEventListener("click", generateWeather);

function generateWeather() {
  var container = document.getElementById("fiveDayWeather");
  container.innerHTML = "";
  for (var i = 0; i < days.length; i++) {
    var w = weather[Math.floor(Math.random() * weather.length)];
    var t = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    var box = document.createElement("div");
    box.id        = days[i];
    box.className = w;
    box.innerHTML = "<b>Forecast for " + days[i] + "</b><br><br>"
                  + w + " and " + t + "°";
    container.appendChild(box);
  }
}

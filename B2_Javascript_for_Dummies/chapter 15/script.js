function dayActivity(day) {
  switch (day.toLowerCase()) {
    case "sunday":   return "🍳 Sleep in and enjoy brunch!";
    case "monday":   return "💼 Back to work—time to hustle.";
    case "tuesday":  return "🏋️‍♀️ Go to the gym.";
    case "wednesday":return "📚 Midweek reading session.";
    case "thursday": return "🎮 Game night with friends.";
    case "friday":   return "🎉 Plan some fun!";
    case "saturday": return "🚴‍♂️ Go for a bike ride.";
    default:         return null;
  }
}

document.getElementById("favDayBtn").onclick = function() {
  var day;
  do {
    day = prompt("What is your favorite day of the week?");
    if (day === null) return;
    day = day.trim();
  } while (!dayActivity(day));

  document.getElementById("favDayResult")
          .innerText = dayActivity(day);
};

document.getElementById("showDayBtn").onclick = function() {
  var sel = document.getElementById("daySelect").value;
  if (!sel) {
    alert("Please select a day first!");
    return;
  }
  document.getElementById("dayResult")
          .innerText = dayActivity(sel);
};

var now = new Date();
var dow = now.getDay();
var dom = now.getDate();
var m   = now.getMonth();
var y   = now.getFullYear();

document.getElementById("todaysdate").innerText =
  now.toLocaleDateString(undefined, {
    weekday: "long", year: "numeric",
    month: "long", day: "numeric"
  });

function monthSlogan(month) {
  switch (month) {
    case 0:  return "❄️ January chill!";
    case 1:  return "❤️ February love!";
    case 2:  return "🌸 March into spring!";
    case 3:  return "🐣 April surprises!";
    case 4:  return "🌷 May blooms!";
    case 5:  return "☀️ June sunshine!";
    case 6:  return "🏖️ July beach time!";
    case 7:  return "🌻 August adventures!";
    case 8:  return "🍂 September leaves!";
    case 9:  return "🎃 October spooks!";
    case 10: return "🦃 November thanks!";
    case 11: return "🎄 December joy!";
    default: return "";
  }
}

function dateNote(dayOfMonth) {
  switch (dayOfMonth) {
    case 1:  return "🥳 Happy start of the month!";
    case 15: return "🛎️ Mid-month check-in!";
    case 30: return "🏁 Almost month-end!";
    case 31: return "📅 Last day special!";
    default: return "📆 Just the " + dayOfMonth + "th day.";
  }
}

function yearInfo(year) {
  var isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return isLeap ? "🎉 It's a leap year!" : "🔢 Regular year.";
}

document.getElementById("activityBtn").onclick = function() {
  var msg1 = dayActivity(now.toLocaleDateString(undefined, { weekday:"long" }));
  var msg2 = monthSlogan(m);
  var msg3 = dateNote(dom);
  var msg4 = yearInfo(y);

  document.getElementById("activityResult").innerText = msg1;
  document.getElementById("moreInfo").innerHTML = msg2 + "<br>" + msg3 + "<br>" + msg4;
};

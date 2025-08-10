var story      = document.getElementById("story");
var question   = document.getElementById("question");
var answer     = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit     = document.getElementById("submit");

var answers = [];

submit.addEventListener("click", getAnswer);


askQuestion(0);

function askQuestion(n) {
  answer.style.display = "block";
  answers.length = n;
  switch (n) {
    case 0:
      question.innerText = "Are you ready to play?";
      break;
    case 1:
      question.innerText = "Go to Mars, or stay home?";
      break;
    case 2:
      question.innerText = "Risk it, or go home?";
      break;
    case 3:                        
      question.innerText = "Donate the robot, or keep it?";
      break;
    case 4:                        
      question.innerText = "Try again next week, or move on?";
      break;
    default:
      question.innerText = "";
  }
}

function getAnswer() {
  var clean = yourAnswer.value.trim().toUpperCase();
  answers.push(clean);
  yourAnswer.value = "";
  continueStory(answers.length - 1);
}

function continueStory(idx) {
  switch (idx) {
    case 0:
      if (answers[0] === "YES") {
        showPart("answer01"); askQuestion(1);
      }
      else if (answers[0] === "NO") {
        showPart("answer02"); askQuestion(0);
      }
      else showPart("err0"), askQuestion(0);
      break;

    case 1:
      if (answers[1] === "GO TO MARS") {
        showPart("answer11"); askQuestion(2);
      }
      else if (answers[1] === "STAY HOME") {
        showPart("answer12"); askQuestion(4);   
      }
      else showPart("err1"), askQuestion(1);
      break;

    case 2:
      if (answers[2] === "RISK IT") {
        showPart("answer21"); askQuestion(3);   
      }
      else if (answers[2] === "GO HOME") {
        showPart("answer22"); theEnd();
      }
      else showPart("err2"), askQuestion(2);
      break;

    
    case 3:
      if (answers[3] === "DONATE") {
        showPart("answer31"); theEnd();
      }
      else if (answers[3] === "KEEP") {
        showPart("answer32"); theEnd();
      }
      else showPart("err3"), askQuestion(3);
      break;

    
    case 4:
      if (answers[4] === "TRY AGAIN") {
        showPart("answer41"); theEnd();
      }
      else if (answers[4] === "MOVE ON") {
        showPart("answer42"); theEnd();
      }
      else showPart("err4"), askQuestion(4);
      break;

    default:
      story.innerHTML = "<p>The story is over.</p>";
  }
}

function showPart(id) {
  story.innerHTML = document.getElementById(id).innerHTML;
}

function theEnd() {
  story.innerHTML += "<p><em>The End.</em></p>";
  question.innerText = "";
  answer.style.display = "none";
}



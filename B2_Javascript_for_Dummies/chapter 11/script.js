
var btn    = document.getElementById('run-demo');
var output = document.getElementById('output');

btn.onclick = function() {
  var log = '';
  function record(label, arrOrVal) {
    console.log(label, arrOrVal);
    log += label + ' ' + (Array.isArray(arrOrVal)
                          ? arrOrVal.join(', ')
                          : arrOrVal) + '\n';
  }

  var people = ["Teddy","Cathy","Bobby"];
  record('Initial:', people);
  people[0] = "Georgie";
  record('After people[0] = "Georgie":', people);

  var otherPeople = ["Mary","Bobby","Judy"];
  var all = people.concat(otherPeople);
  record('After concat:', all);

  record('indexOf("Bobby"):', all.indexOf("Bobby"));
  record('lastIndexOf("Bobby"):', all.lastIndexOf("Bobby"));

  
  record('join(" | "):', all.join(' | '));

  
  var popped = all.pop();
  record('pop() removed:', popped);
  record('Array now:', all);
  all.push(popped);
  record('push(popped):', all);

  
  all.reverse();
  record('reverse():', all);

  
  var shifted = all.shift();
  record('shift() removed:', shifted);
  record('After shift:', all);
  all.unshift("Tony");
  record('unshift("Tony"):', all);

  
  var slice3 = all.slice(1,4);
  record('slice(1,4):', slice3);

  
  all.sort();
  record('sort():', all);

  
  var sp = all.splice(2, 1, "Eddie");
  record('splice(2,1,"Eddie") removed:', sp);
  record('After splice:', all);

  
  record('toString():', all.toString());
  record('valueOf():', all.valueOf());

  output.innerText = log;
};


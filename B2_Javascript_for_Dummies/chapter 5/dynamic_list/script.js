var heading   = document.getElementById('myName');
var subtext   = document.getElementById('aboutMe');
var list      = document.getElementById('favorites');
var changeBtn = document.getElementById('changeList');

changeBtn.onclick = function() {
  var favMovie = prompt('What is your favorite movie?');
  var favSong  = prompt('What is your favorite song?');
  var favColor = prompt('What is your favorite color?');
  var favFood  = prompt('What is your favorite food?');

  heading.innerText = 'Your Top 4 Favorites';
  subtext.innerHTML   = '<em>Thanks for sharing!</em>';

  list.innerHTML = '';  
  var items = [favMovie, favSong, favColor, favFood];

  for (var i = 0; i < items.length; i = i + 1) {
    var li = document.createElement('li');
    li.innerText = items[i];
    list.appendChild(li);
    console.log((i+1) + ': ' + items[i]);
  }
};







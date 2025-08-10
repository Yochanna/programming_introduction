var movies = {
  "The Matrix":    { year: 1999, rating: 5.0 },
  "Inception":     { year: 2010, rating: 4.8 },
  "Spirited Away": { year: 2001, rating: 4.9 }
};

var button = document.getElementById('show-movies-button');
var output = document.getElementById('output-area');

button.onclick = function() {
  output.innerText = '';  

  for (var title in movies) {
    var info = movies[title];
    var line = title + " (" + info.year + ") Rating: " + info.rating;
    
    output.innerText += line + "\n";
    
    console.log(line);
  }
};




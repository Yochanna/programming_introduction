
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];


var maxTemp = 110;
var minTemp = 32;


var lemonadeCost = 0.5;


var dailyTemp = [];


document.getElementById("OpenTheStand").addEventListener("click", openTheStand);


generateWeather();


function generateWeather() {
    var weatherToday;
    var tempToday;
    for (var i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        dailyTemp[i] = tempToday;
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}


function openTheStand() {
    var glassesSold = 0; 
    var totalGlasses = 0;
    var glassesLeft = 0; 

    
    resetForm();

    
    var numGlasses = Number(document.getElementById("numGlasses").value);
    var glassPrice = Number(document.getElementById("glassPrice").value);


    for (var i = 0; i < days.length; i++) {

    
        glassesSold = Math.floor(dailyTemp[i] / glassPrice);


        glassesLeft = numGlasses - totalGlasses;


        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }


        totalGlasses = glassesSold + totalGlasses;


        document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";

    }

    displayResults(numGlasses, glassPrice, totalGlasses);

}


function displayResults(weeklyInventory, glassPrice, weeklySales) {
    
    var revenue = weeklySales * glassPrice;
    var expense = weeklyInventory * lemonadeCost;
    var leftOver = weeklyInventory - weeklySales;
    var profit = revenue - expense;

    
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";
}


function resetForm() {
    document.getElementById("result").innerHTML = "";

}
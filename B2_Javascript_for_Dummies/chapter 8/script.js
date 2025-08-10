var dreamCar = {
    make: "Oldsmobile of the Future",
    model: "98",
    color: "lightpink",
    year: 1993,
    bodyStyle: "Luxury Car",
    price: 5500,

    frontwheelColor: "blue",
    frontwheelBorder: "3px dashed yellow",
    frontwheelRadius: "50%",

    backwheelColor: "gray",
    backwheelBorder: "3px dashed purple",
    backwheelRadius: "50%"
};

alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML       = dreamCar.price;
document.getElementById("modelyear").innerHTML      = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML           = dreamCar.make + " " + dreamCar.model;

var backWheel = document.getElementById("backwheel");
backWheel.style.backgroundColor = dreamCar.backwheelColor;
backWheel.style.border          = dreamCar.backwheelBorder;
backWheel.style.borderRadius    = dreamCar.backwheelRadius;

var frontWheel = document.getElementById("frontwheel");
frontWheel.style.backgroundColor = dreamCar.frontwheelColor;
frontWheel.style.border          = dreamCar.frontwheelBorder;
frontWheel.style.borderRadius    = dreamCar.frontwheelRadius;

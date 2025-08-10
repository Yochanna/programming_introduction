document.getElementById("placeOrder")
        .addEventListener("click", placeOrder);

function placeOrder() {

  var feedback = document.getElementById("feedback");
  feedback.innerText = "";


  var numPizzas    = Number(document.getElementById("numPizzas").value);
  var typePizza    = document.getElementById("typePizza").value;
  var pizzaBase    = document.getElementById("pizzaBase").value;
  var deliveryCity = document.getElementById("deliveryCity").value;
  var birthday     = document.getElementById("birthday").value;
  var promoCode    = document.getElementById("promoCode").value.trim();


  if (isNaN(numPizzas) || numPizzas < 1) {
    feedback.innerText = "Please enter a valid number of pizzas (at least 1).";
    return;
  }


  var orderPrice = calculatePrice(numPizzas, typePizza, pizzaBase);


  var discount = 0;
  if (promoCode.toUpperCase() === "PIZZA10") {
    discount = orderPrice * 0.10;
    orderPrice -= discount;
  }


  var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);


  var output = "<p>Thank you for your order.</p>";
  if (discount > 0) {
    output += "<p>Coupon applied: -$" 
           + discount.toFixed(2) 
           + " (10% off)<br>";
    output += "New pizza subtotal: $" 
           + orderPrice.toFixed(2) 
           + "</p>";
  }

  if (deliveryPrice === 0) {
    output += "<p>You get free delivery!</p>";
  } else {
    output += "<p>Your delivery cost is: $" 
           + deliveryPrice.toFixed(2) 
           + "</p>";
  }

  output += "<p><strong>Your total is: $"
         + (orderPrice + deliveryPrice).toFixed(2)
         + "</strong></p>";


  document.getElementById("displayTotal").innerHTML = output;
}


function calculatePrice(num, type, base) {
  var price = num * 10;
  if (type === "supreme") {
    price += num * 2;
  }
  if (base === "thick") {
    price += num * 2;
  }
  return price;
}


function calculateDelivery(orderPrice, city, birthday) {
  var fee = 0;
  var freeCond = ((city === "Anytown") && (orderPrice > 10)) 
                 || (birthday === "yes");

  if (!freeCond) {
    fee = 5;
    if (city === "Beverly Hills") {
      fee += 5; 
    }
  }
  return fee;
}

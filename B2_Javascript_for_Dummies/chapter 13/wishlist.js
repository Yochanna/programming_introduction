var wishList      = [];
var shoppingList  = [];

var wishListArea     = document.getElementById("wishList");
var shoppingListArea = document.getElementById("shoppingList");

var wishForm   = document.getElementById("wishForm");
var shopForm   = document.getElementById("shopForm");

var addWishBtn = document.getElementById("addWish");
var addItemBtn = document.getElementById("addItem");

var printWishBtn = document.getElementById("printWish");
var printShopBtn = document.getElementById("printShop");

function appendItem(listArea, text) {
  var li = document.createElement("li");
  li.innerText = text;
  listArea.appendChild(li);
}

addWishBtn.onclick = function() {
  var input = document.getElementById("iWant");
  var item  = input.value.trim();
  if (!item) return;
  wishList.push(item);
  console.log("Wish added:", item);
  appendItem(wishListArea, item);
  input.value = "";
};

addItemBtn.onclick = function() {
  var input = document.getElementById("iBought");
  var item  = input.value.trim();
  if (!item) return;
  shoppingList.push(item);
  console.log("Shopping item added:", item);
  appendItem(shoppingListArea, item);
  input.value = "";
};

printWishBtn.onclick = function() {

  shopForm.style.display = "none";
  shoppingListArea.classList.remove("print-only");
  shoppingListArea.classList.remove("print-only");

  wishForm.classList.add("print-only");
  wishListArea.classList.add("print-only");
  console.log("Printing Wish List:", wishList);
  window.print();

  shopForm.style.display = "";
  wishForm.classList.remove("print-only");
  wishListArea.classList.remove("print-only");
};


printShopBtn.onclick = function() {

  wishForm.style.display = "none";
  wishListArea.classList.remove("print-only");

  shopForm.classList.add("print-only");
  shoppingListArea.classList.add("print-only");
  console.log("Printing Shopping List:", shoppingList);
  window.print();

  wishForm.style.display = "";
  shopForm.classList.remove("print-only");
  shoppingListArea.classList.remove("print-only");
};


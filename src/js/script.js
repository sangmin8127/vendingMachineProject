const products = [
  { name: "코카콜라", price: 1200 },
  { name: "펩시", price: 1100 },
  { name: "사이다", price: 1500 },
  { name: "환타", price: 900 },
  { name: "오렌지쥬스", price: 2000 }
];

var productsDiv = document.getElementById("products");
for (var i = 0; i < products.length; i++) {
  var product = products[i];
  console.log("제품명 : ", product.name);
  var productDiv = document.createElement("div");
  productDiv.className = "product"; 

  var productButton = document.createElement("button");
  productButton.className = "product-button";
  productButton.innerHTML = product.name + "<br>" + product.price + "원";
  productDiv.appendChild(productButton);
  //productsDiv.appendChild(productDiv);
}

var priceButtonsDiv = document.getElementById("price-buttons");
var priceButtons = [1000, 500, 100];
for (var i = 0; i < priceButtons.length; i++) {
  var priceButton = document.createElement("button");
  priceButton.className = "price-button";
  priceButton.innerHTML = priceButtons[i] + "&#65533;&#65533;";
  //priceButtonsDiv.appendChild(priceButton);
}
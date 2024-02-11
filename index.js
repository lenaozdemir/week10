//Задание 2

function showMessage() {
  console.log("Я учу JavaScript!");
}
showMessage();

// Задание 3
let image = document.getElementById("image-cat");

function openNextImg() {
  image.src = "./assets/cat3.jpg";
}

function openPrevImg() {
  image.src = "./assets/cat1.jpg";
}

// Задание со звездочкой

function calculateTotalPrice() {
  let quantity = document.getElementById("cats-number").value;
  let price = 1000;
  let totalPrice = quantity * price;

  let totalPriceElement = document.getElementById("cats__total");
  totalPriceElement.textContent = "Степень ми-ми-мяушности: " + totalPrice;

  console.log("Степень ми-ми-мяушности:", totalPrice);
  // alert("Общая стоимость: " + totalPrice);
}

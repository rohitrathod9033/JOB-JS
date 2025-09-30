let add_cart = document.querySelectorAll(".add-to-cart-btn");
let h2 = document.querySelector("h2");
let price = document.querySelectorAll(".product p");
let total_cart = document.querySelector("#cart-total");

let count = 0;



add_cart.forEach((btn) => {
  return btn.addEventListener("click", function () {
    count++;
    h2.innerText = `Total : ${count}`;


    let name = btn.getAttribute("data-name")
    let price = btn.getAttribute("data-price")
    console.log(name, price)

    
  });
});

let cart = [];
let total = 0;
cart.forEach((product, idx) => {
  let subTotal = product.price;
  total = total + subTotal;

  let row = document.createElement("tr");
  row.innerHTML = `
  <td>${item.name}</td>
  <td>${item.price}</td>
  <td>${item.quantity}</td>
  `
})
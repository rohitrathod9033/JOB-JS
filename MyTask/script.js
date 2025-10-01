let add_cart = document.querySelectorAll(".add-to-cart-btn");
let h2 = document.querySelector("h2");
let total_cart = document.querySelector("#cart-total");
let table_body = document.querySelector("#cart-items");

let count = 0;
let cart = [];
let total = 0;

add_cart.forEach((btn) => {
  return btn.addEventListener("click", function () {
    count++;
    h2.innerText = `Total items : ${count}`;

    let name = btn.getAttribute("data-name");
    let price = Number(btn.getAttribute("data-price"));

    let existing = cart.find((item) => item.name === name);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ name: name, price: price, quantity: 1 });
    }

    renderCart();
  });
});

function renderCart() {
  table_body.innerHTML = "";
  total = 0;

  cart.forEach((product, idx) => {
    let subTotal = product.price * product.quantity;
    total = total + subTotal;

    let newRow = `
    <tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td>${subTotal}</td>
    <tr/>
  `;
    table_body.innerHTML = table_body.innerHTML + newRow;
  });
  total_cart.innerText = `Total: ₹${total}`;
}

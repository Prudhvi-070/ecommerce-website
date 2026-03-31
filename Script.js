const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "Shoes", price: 1000 }
];

let cart = 0;

const productList = document.getElementById("product-list");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>Price: ₹${p.price}</p>
    <button onclick="addToCart()">Add to Cart</button>
  `;

  productList.appendChild(div);
});

function addToCart() {
  cart++;
  document.getElementById("cart-count").innerText = cart;
}

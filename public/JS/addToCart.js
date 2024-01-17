const addProductBtn = document.querySelector("#add-to-cart");

addProductBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const infoProduct = e.target.parentElement;
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  let product = {
    id: infoProduct.querySelector("#product-id").value,
    license: infoProduct.querySelector("#product-license").value,
    name: infoProduct.querySelector("#product-name").value,
    price: infoProduct.querySelector("#product-price").value,
    img: infoProduct.querySelector("#product-img").value,
    quantity: infoProduct.querySelector("#quantity").value,
  };
  let cart = JSON.parse(localStorage.getItem("cart"));
  let findProduct = cart.find((item) => item.id === product.id);
  if (findProduct) {
    findProduct.quantity =
      parseInt(findProduct.quantity) + parseInt(product.quantity);
  } else {
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
});

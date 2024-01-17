const cantResumen = document.querySelector("#cantidad-de-elementos");
const totalResumen = document.querySelector("#monto-a-pagar");
const subtotalResumen = document.querySelector("#subtotal-precio");
const productListContainer = document.querySelector("#product-list-container");

addEventListener("DOMContentLoaded", (e) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart === null || cart.length === 0) {
    productListContainer.innerHTML = `  <h1 class="carrito__article__items--product">No hay productos en el carrito</h1>`;
  } else {
    productListContainer.innerHTML = "";
    let cant = 0;
    let subTotal = 0;
    cart.forEach((product) => {
      cant += parseInt(product.quantity);
      subTotal += parseInt(product.price) * parseInt(product.quantity);
      productListContainer.innerHTML += `
      <li>
              <article class="carrito__article_items">
            <div class="carrito__article__items--product">
            <div>
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div>   
                <ul>
                    <li class="carrito__article__items--product--title">${
                      product.name
                    }</li>
                    <li class="carrito__article__items--product--license">${
                      product.license
                    }</li>
                    <li class="carrito__article__items--product--punit">Precio: $ ${
                      product.price
                    }</li>
                </ul>         
            </div>
            </div>
            
            <div class="carrito__articles--product--quantity">
                ${product.quantity} 
            </div>
              
              
            <div class="carrito__article__items--price">
                $ ${product.price * product.quantity}
            </div>

            <button  class="carrito__article__items--delete" id='${product.id}'>
               <iconify-icon icon="material-symbols:delete-outline" style="color: red;" width="30" height="30"></iconify-icon>
            </button>
        </article>
  
            </li>
      `;
    });

    cantResumen.innerHTML = cant;
    subtotalResumen.innerHTML = `$ ${subTotal}`;
    totalResumen.innerHTML = `$ ${subTotal}`;
    const deleteBtns = document.querySelectorAll(
      ".carrito__article__items--delete"
    );

    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", (e) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let newCart = cart.filter((item) => item.id !== deleteBtn.id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        location.reload();
      });
    });
  }
});

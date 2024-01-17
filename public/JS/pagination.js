const {
  getAllProducts,
  paginate,
  getProductById,
  getShopProducts,
  relatedProducts,
  getTotalQuantity,
} = require("../../src/models/db/products.model");

document.addEventListener("DOMContentLoaded", function () {
  const prevPageButton = document.getElementById("prevPage");
  const nextPageButton = document.getElementById("nextPage");
  const pagination = document.getElementById("pagination");

  let currentPage = 1; // Página actual, inicializada en 1

  // Función para manejar el cambio de página
  async function showPage(page) {
    // Puedes agregar lógica adicional aquí, como hacer una solicitud AJAX para obtener los productos de la página.
    console.log(`Mostrar página ${page}`);
  }

  // Manejar clic en la flecha izquierda
  prevPageButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  // Manejar clic en la flecha derecha
  nextPageButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Manejar clic en los enlaces de paginación
  pagination.addEventListener("click", function (event) {
    if (event.target.classList.contains("pagination__link")) {
      currentPage = parseInt(event.target.textContent);
      showPage(currentPage);
    }
  });
});

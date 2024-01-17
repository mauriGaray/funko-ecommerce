const express = require("express");
const router = express.Router();
const {
  admin,
  createProducts,
  postProduct,
  getEditProduct,
  putEditProduct,
  deleteProduct,
} = require("../controllers/adminController");
const { isLogged } = require("../middlewares/auth/isLogged");
const { uploadFile } = require("../utils/uploadFiles");

router.use(isLogged);

// Routes

router.get("/", admin);
router.get("/create", createProducts);
router.post("/create", uploadFile.array("images", 2), postProduct);
router.get("/edit/:id", getEditProduct);
router.put("/edit/:id", uploadFile.array("images", 2), putEditProduct);
router.delete("/delete/:id", deleteProduct);
module.exports = router; // me olvidé de exportar el router en cada unas de las rutas. Me da error 'TypeError: Router.use() requires middleware function but got a Object'

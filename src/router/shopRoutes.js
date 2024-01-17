const express = require("express");
const router = express.Router();
const {
  shop,
  productDetail,
  addProduct,
  cart,
  postCart,
} = require("../controllers/shopController");

router.get("/", shop);
router.get("/item/:id", productDetail);
router.post("/item/add", addProduct);
router.get("/cart", cart);
router.post("/cart", postCart);
module.exports = router;

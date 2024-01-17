const express = require("express");
const router = express.Router();
const {
  login,
  doLogin,
  register,
  doRegister,
  logout,
} = require("../controllers/authController");
const validateInput = require("../middlewares/validator/validator");
const {
  loginValidation,
} = require("../middlewares/validator/validateRegister");

// Routes

router.get("/login", login);
router.post("/login", loginValidation, validateInput, doLogin);
router.get("/register", register);
router.post("/register", doRegister);
router.get("/logout", logout);
module.exports = router;

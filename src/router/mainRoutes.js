const express = require("express");
const router = express.Router();
const {
  home,
  about,
  contact,
  faqs,
  sentContact,
} = require("../controllers/mainController");

// Routes

router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
router.post("/contact", sentContact);
router.get("/faqs", faqs);

module.exports = router;

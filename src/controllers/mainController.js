const path = require("path");
const models = require("../models/db/products.model.js");
const connection = require("../models/config/conn.js");
module.exports = {
  //main
  home: async (req, res) => {
    const lastProducts = await models.getLastProducts();
    const collections = await models.getCollections();

    res.render(path.resolve(__dirname, "../views/index.ejs"), {
      lastProducts,
      collections,
    });
  },

  contact: (req, res) => {
    res.render(path.resolve(__dirname, "../views/contact/contact.ejs"));
  },
  faqs: (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
  about: (req, res) => {
    res.render(path.resolve(__dirname, "../views/errors/inProgress.ejs"));
  },
  sentContact: (req, res) => {
    res.send("Mensaje enviado <a href='/'>Volver al inicio</a>");
  },
};

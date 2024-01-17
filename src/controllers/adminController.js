const path = require("path");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
  editProduct,
} = require("../models/db/products.model.js");

const connection = require("../models/config/conn.js");
module.exports = {
  admin: async (req, res) => {
    const items = await getAllProducts();

    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      items,
    });
  },
  createProducts: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"));
  },
  postProduct: async (req, res) => {
    const product_schema = {
      product_name: req.body.name,
      product_description: req.body.description,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      discount: Number(req.body.discount),
      sku: req.body.sku,
      dues: Number(req.body.dues),
      image_front: "/" + req.files[0].filename,
      image_back: "/" + req.files[1].filename,
      licence_id: Number(req.body.licence),
      category_id: Number(req.body.category),
    };
    await createProduct(product_schema);
    res.redirect("/admin");
  },
  getEditProduct: async (req, res) => {
    const { id } = req.params;
    const item = await getProductById(id);
    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      item,
    });
  },
  putEditProduct: async (req, res) => {
    const { id } = req.params;
    const product_schema = {
      product_name: req.body.name,
      product_description: req.body.description,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      discount: Number(req.body.discount),
      sku: req.body.sku,
      dues: Number(req.body.dues),
      category_id: Number(req.body.category),
      licence_id: Number(req.body.licence),
    };
    await editProduct(product_schema, { product_id: id });
    /*console.log(product_schema)*/
    res.redirect("/admin");
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    await deleteProduct({ product_id: id });

    res.redirect("/admin");
  },
};

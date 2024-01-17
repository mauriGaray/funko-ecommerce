const path = require("path");

module.exports = {
  error500: (err, req, res, next) => {
    console.error(err.stack);
    res.render(path.resolve(__dirname, "../views/errors/err500.ejs"));
  },
  error404: (req, res, next) => {
    res.render(path.resolve(__dirname, "../views/errors/err404.ejs"));
  },
};

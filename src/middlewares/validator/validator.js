const { validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.send({ errors: errors.array() });
  } else {
    return next();
  }
};

module.exports = validateInput;

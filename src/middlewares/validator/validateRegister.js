const { body } = require("express-validator");
const { conn } = require("../../models/config/conn");

const validateRegister = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres")
    .bail()
    .custom((value, { req }) => {
      return new Promise(async (resolve, reject) => {
        try {
          const [userExists] = await conn.query(
            `SELECT * FROM user WHERE name = '${value}'`
          );
          if (!userExists) {
            return reject(new Error("El usuario ya existe"));
          } else {
            return resolve();
          }
        } catch (error) {
          console.log(error);
        }
      });
    })
    .withMessage("El nombre esta duplicado"),
  body("surname")
    .isLength({ min: 3 })
    .withMessage("El apellido debe tener al menos 3 caracteres"),
  body("email").isEmail().withMessage("El email debe ser un email valido"),
];
const loginValidation = [
  body("email").isEmail().withMessage("Necesito que ingrese un correo válido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage(
      "La contraseña debe tener al menos 6 caracteres y contener letras y números."
    ),
];

module.exports = { validateRegister, loginValidation };

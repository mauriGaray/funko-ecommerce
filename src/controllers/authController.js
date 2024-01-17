const path = require("path");
const { createUser, userVerification } = require("../models/db/users.model");
const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"));
  },
  doLogin: async (req, res) => {
    const { email, password } = req.body;

    try {
      const [userExist] = await userVerification(email);

      if (!userExist) {
        return res
          .status(401)
          .send("No existe un usuario registrado con ese email");
      }

      const passwordMatch = await bcrypt.compare(password, userExist.password);

      if (passwordMatch) {
        req.session.isLogged = true;
        return res.redirect(`/`);
      } else {
        req.session.isLogged = false;
        return res
          .status(401)
          .send("La contraseña es incorrecta, por favor intenta nuevamente");
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res
        .status(500)
        .send("Hubo un error, por favor intenta nuevamente");
    }
  },
  register: async (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"));
  },
  doRegister: async (req, res) => {
    const newUser = await createUser(req.body);
    newUser
      ? res.render(path.resolve(__dirname, "../views/auth/userWelcome.ejs"))
      : res.send(
          "Hubo un error al registrarte, por favor intenta nuevamente <a href='/auth/register'>AQUÍ</a>"
        );
  },
  logout: async (req, res) => {
    req.session.isLogged = false;
    res.redirect("/");
  },
};

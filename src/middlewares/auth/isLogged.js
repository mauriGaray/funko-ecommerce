const isLogged = (req, res, next) => {
  if (req.session.isLogged) {
    return next();
  } else {
    return res
      .status(401)
      .send(
        '<h1>Usuario no logueado</h1><a href="/auth/login">Iniciar sesión</a> <a href="/auth/register">Registrarse</a>'
      );
  }
};

module.exports = {
  isLogged,
};

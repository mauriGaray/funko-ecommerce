const session = require("cookie-session");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

function initSession() {
  return session({
    secret: process.env.SESSION_NAME || uuidv4(),
  });
}

module.exports = {
  initSession,
};

const { conn } = require("../config/conn");
const crypt = require("bcryptjs");

const createUser = async (newUser) => {
  const { name, surname, email, password } = newUser;
  const hash = await crypt.hash(password, 10);
  try {
    conn.query(
      `INSERT INTO user (name, lastname, email, password) VALUES ('${name}', '${surname}', '${email}', '${hash}');`
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    conn.releaseConnection();
  }
};
const allUsers = async () => {
  try {
    const [users] = await conn.query(`SELECT * FROM user`);
    return users;
  } catch (error) {
    console.log(error);
  } finally {
    conn.releaseConnection();
  }
};
const userVerification = async (email) => {
  try {
    const [user] = await conn.query(
      `SELECT * FROM user WHERE email = '${email}' ;`
    );
    return user;
  } catch (error) {
    console.log(error);
  } finally {
    conn.releaseConnection();
  }
};

module.exports = { createUser, allUsers, userVerification };

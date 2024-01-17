const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
  port: process.env.DBPORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log("Error de conexión a la base de datos", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
    pool.releaseConnection(conn);
  }
});

module.exports = {
  conn: pool.promise(),
};

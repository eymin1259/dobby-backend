const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    host: process.env.mysql_host,
    port: process.env.mysql_port,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_database,
    dialect: "mysql",
  },
  production: {
    host: process.env.mysql_host,
    port: process.env.mysql_port,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_database,
    dialect: "mysql",
  },
};

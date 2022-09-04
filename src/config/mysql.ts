const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  dev: {
    host: process.env.mysql_host,
    port: process.env.mysql_port,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_database,
  },
  prd: {
    host: process.env.mysql_host,
    port: process.env.mysql_port,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_database,
  }
}

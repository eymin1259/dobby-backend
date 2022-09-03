const mysql = require("mysql");

const mysqlConnetion = {
  init: function () {
    return mysql.createConnection({
      host: process.env.host,
      port: process.env.port,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database,
    });
  },

  open: function (con) {
    con.connect((err) => {
      if (err) {
        console.log("mysql 연결실패:", err);
      } else {
        console.log("mysql conneted!");
      }
    });
  },
  close: function (con) {
    con.end((err) => {
      if (err) {
        console.log("mysql 종료 실패:", err);
      } else {
        console.log("mysql terminated");
      }
    });
  },
};

module.exports = mysqlConnetion;

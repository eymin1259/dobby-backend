const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 8080;

// Set CORS option
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// RESTful API route for DB
// app.use("/", require("./src/mysql/router/route.ts"));

// const db = require("./src/mysql/models/index.js");
// db.sequelizeConfig.sync();

// const db = require('./src/config/mysql.ts');
const connection = mysql.createConnection({
  // host: process.env.mysql_host,
  host: "127.0.0.1",
  // port: process.env.mysql_port,
  port: 3306,
  // user: process.env.mysql_user,
  user: "lina",
  // password: process.env.mysql_password,
  password: "*Skgus74650!",
  database: process.env.mysql_database,
});

connection.query(
  "SELECT * FROM dobby_projects.USER",
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);

console.log("process.env", process.env.NODE_ENV);

app.listen(port, () => console.log("sever running.."));

app.get("/", (req, res) => res.send("hello NH world, home"));

app.get("/about", (req, res) => res.send("hello NH world!, about"));

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

// Set CORS option
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// RESTful API route for DB
app.use('/', require('./src/mysql/router/route.ts'));

const db = require('./src/mysql/models/index.ts');
  db.sequelizeConfig.sync();

const dotenv = require("dotenv").config();
// const mysqlConnectObj = require("./src/config/mysql");
// const db = mysqlConnectObj.init();

// mysqlConnectObj.open(db);

app.listen(port, () => console.log("sever running.."));

app.get("/", (req, res) => res.send("hello NH world, home"));

app.get("/about", (req, res) => res.send("hello NH world!, about"));

const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv").config();
const mysqlConnectObj = require("./src/config/mysql");
const db = mysqlConnectObj.init();

mysqlConnectObj.open(db);

app.listen(port, () => console.log("sever running.."));

app.get("/", (req, res) => res.send("hello NH world, home"));

app.get("/about", (req, res) => res.send("hello NH world!, about"));

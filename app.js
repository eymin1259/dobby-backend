const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv").config();
const mysqlConnectObj = require("./config/mysql");
const db = mysqlConnectObj.init();

mysqlConnectObj.open(db);

app.get("/", (req, res) => res.send("hello NH world!"));

app.listen(port, () => console.log("sever running.."));

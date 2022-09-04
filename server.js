const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./src/models/index.js");

const app = express();
const port = process.env.PORT || 8080;

// Set CORS option
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// RESTful API route for DB
// app.use('/', require('./src/mysql/router/route.ts'));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

const dotenv = require("dotenv").config();

app.listen(port, () => console.log("server running.."));

app.get("/", (req, res) => res.send("hello NH world, home"));

app.get("/about", (req, res) => res.send("hello NH world!, about"));

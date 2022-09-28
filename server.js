const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./src/models/index.js");
const router = require("./src/router");

const app = express();
const port = process.env.PORT || 8080;

// Set CORS option
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
// app.use("/users", users);

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

// console.log(process.env);

app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line no-console
    console.log("Production Mode");
  } else if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log("Development Mode");
  }
  // eslint-disable-next-line no-console
  console.log(`GGBD server app listening at http://localhost:${port}`);
});

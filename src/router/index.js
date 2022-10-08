const express = require("express");
const main = require("./main");
const user = require("./user");
const oauth = require("./oauth");

const router = express.Router();

router.use("/", main);
router.use("/oauth", oauth);
router.use("/user", user);

module.exports = router;

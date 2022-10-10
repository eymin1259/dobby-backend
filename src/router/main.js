const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello world by anthony");
});

module.exports = router;
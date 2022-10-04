const router = require("express").Router();
const { socialLogin } = require("../controller/oauth");

router.post("/login", socialLogin);

module.exports = router;

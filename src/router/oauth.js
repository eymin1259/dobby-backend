const router = require("express").Router();
const { socialLogin, kakaoLogin } = require("../controller/oauth");

router.post("/login", socialLogin);
router.post("/kakaoLogin", kakaoLogin);

module.exports = router;

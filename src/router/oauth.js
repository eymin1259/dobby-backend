const router = require("express").Router();
const { socialLogin, kakaoLogin, appleLogin } = require("../controller/oauth");

router.post("/login", socialLogin);
router.post("/kakaoLogin", kakaoLogin);
router.post("/appleLogin", appleLogin);

module.exports = router;

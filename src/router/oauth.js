const router = require("express").Router();
const { socialLogin, kakaoLogin, appleLogin, appleLogout } = require("../controller/oauth");

router.post("/login", socialLogin);
router.post("/kakaoLogin", kakaoLogin);
router.post("/appleLogin", appleLogin);
router.post("/appleLogout", appleLogout);

module.exports = router;

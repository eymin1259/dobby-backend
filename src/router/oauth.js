const router = require("express").Router();
const { socialLogin, kakaoLogin, appleLogin, appleLogout, refreshToken } = require("../controller/oauth");

router.post("/login", socialLogin);
router.post("/kakaoLogin", kakaoLogin);
router.post("/appleLogin", appleLogin);
router.post("/appleLogout", appleLogout);
router.post("/refreshToken", refreshToken);

module.exports = router;

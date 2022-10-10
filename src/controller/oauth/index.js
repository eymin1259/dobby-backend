const socialLogin = require("./socialLogin");
const kakaoLogin = require("./kakaoLogin");
const appleLogin = require("./appleLogin");
//kakao랑 구글 redirect url 설정..!(아마)

module.exports = {
  socialLogin,
  kakaoLogin,
  appleLogin
};

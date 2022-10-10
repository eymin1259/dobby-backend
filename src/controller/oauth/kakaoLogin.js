const axios = require("axios");
const { response } = require("express");
const jwt = require("jsonwebtoken");
const { users } = require("../../models");

module.exports = async (req, res) => {
  const { authorizationCode } = req.body;
  console.log("카카오로그인", authorizationCode);
  const KakaoAccessToken =
    "rRAU5Ey-gRG8XVrNvefY0C3kEx8BK3OhvGTJov8WCj1z6wAAAYPBhpjq";
  try {
    // const TokenResponse = await axios({
    //   method: "POST",
    //   url: "https://kauth.kakao.com/oauth/token",
    //   headers: {
    //     "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //   },
    //   params: {
    //     grant_type: "authorization_code",
    //     client_id: process.env.KAKAO_CLIENT_ID,
    //     client_secret: process.env.KAKAO_CLIENT_SECRET,
    //     redirect_uri: process.env.KAKAO_REDIRECT_URI,
    //     code: authorizationCode,
    //   },
    // });

    // const KakaoAccessToken = TokenResponse.data.access_token;

    const kakaoUserInfo = await axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${KakaoAccessToken}`,
      },
    });
    // console.log("카카오로그인_정보", kakaoUserInfo);

    const userInfo = {
      user_name: kakaoUserInfo.data.properties.nickname,
      profile_url: kakaoUserInfo.data.properties.thumbnail_image,
    };

    console.log("카카오로그인_정보", users);
    // user모델 수정 필
    await users.findOrCreate({
      where: { id: kakaoUserInfo.data.id },
      defaults: userInfo,
    });

    const userData = await users.findOne({
      where: { id: kakaoUserInfo.data.id },
    });

    const payload = userData.get();

    // const userInfoValue = {
    //   ...userInfoValue,
    //   //카카오 로그인 들어오는 값에 따라 달라짐
    //   nickname: userInfo.data.properties?.nickname,
    //   img: userInfo.data.properies?.profile_name,
    //   //로그인 타입 db 추가 예정
    //   loginType: "kakao",
    // };

    // }

    // jwt 토큰 중 accessToken을 확인한다.
    // const KakaoAccessToken =
    //   "d2Q6I67ZYl-F1NG4qcTL4jdZsX3ZIqZqVQZjkGe4Cj10aQAAAYO1RB_-";
    // let getKakaoUrl = "https://kapi.kakao.com/v2/user/me";
    // const userInfo = await axios.get(getKakaoUrl, {
    //   headers: {
    //     Authorization: `Bearer ${socialAccessToken}`,
    //   },
    // });
    // console.log("카카오로그인 get", userInfo);
  } catch (e) {
    res.status(500).send(`카카오 로그인에 해당 에러가 났습니다. => ${e} `);
  }
};

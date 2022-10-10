const axios = require("axios");
const { response } = require("express");
const jwt = require("jsonwebtoken");
const { user } = require("../../models");

module.exports = async (req, res) => {
  const { accessToken } = req.body;
  console.log("apple login", accessToken);
  const identityToken = accessToken;
  try {
  
    // const kakaoUserInfo = await axios({
    //   method: "GET",
    //   url: "https://kapi.kakao.com/v2/user/me",
    //   headers: {
    //     Authorization: `Bearer ${KakaoAccessToken}`,
    //   },
    // });
    // console.log("카카오로그인_정보", kakaoUserInfo);

    // const userInfo = {
    //   nickname: kakaoUserInfo.data.properties.nickname,
    //   img: kakaoUserInfo.data.properties.thumbnail_image,
    // };

    // // user모델 수정 필
    // await user.findOrCreate({
    //   where: { id: kakaoUserInfo.data.id },
    //   defaults: userInfo,
    // });

    // const userData = await user.findOne({
    //   where: { id: kakaoUserInfo.data.id },
    // });

    // const payload = userData.get();
    // console.log("유저겟", payload);
    res.status(200).json({ 
        "accessToken": identityToken,
        "refreshToken": "fakeRefreshToken",
    });
  } catch (e) {
    res.status(500).send(`카카오 로그인에 해당 에러가 났습니다. => ${e} `);
  }
};

const axios = require("axios");
const jwt = require("jsonwebtoken");
const { user } = require("../../models");

module.exports = async (req, res) => {
  try {
    // 소셜로그인에서 받아오는 토큰 확인 필요
    
    const socialAccessToken = req.body.tokenData.data.access_token;
    const { state } = req.body;
    let getUserInfoUrl;
    if (state === "kakao") {
      //카카오 url : 사용자 정보 가져오기
      getUserInfoUrl = "https://kapi.kakao.com/v2/user/me";
    } else if (state === "google") {
      // 구글 url 넣으세요
      getUserInfoUrl = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${socialAccessToken}`;
    } else {
      //그 외는 애플만 있다고 가정 (애플 url 넣으세요.)
      getUserInfoUrl = "애플 url";
    }

    const userInfo = await axios.get(getUserInfoUrl, {
      headers: {
        Authorization: `Bearer ${socialAccessToken}`,
      },
    });

    //받아오는 값(1)이미지 (2)이름/닉네임
    let userInfoValue = {};
    if (state === "kakao") {
      userInfoValue = {
        ...userInfoValue,
        //카카오 로그인 들어오는 값에 따라 달라짐
        nickname: userInfo.data.properties?.nickname,
        img: userInfo.data.properies?.profile_name,
        //로그인 타입 db 추가 예정
        loginType: "kakao",
      };
    } else if (state === "google") {
      userInfoValue = {
        ...userInfoValue,
        nickname: userInfo.data.given_name,
        img: userInfo.data.picture,
        //로그인 타입 db 추가 예정
        loginType: "google",
      };
    } else {
      userInfoValue = {};
    }
    //findOrCreate 특정 요소를 검색하거나, 존재하지 않으면 새로 생성
    await user.findOrCreate({
      where: { id: userInfo.data.id },
      defaults: userInfoValue,
    });

    const userData = await user.findOne({
      where: { id: userInfo.data.id },
    });

    const payload = userData.get();

    const accessToken = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "12h",
    });

    const refreshToken = await jwt.sign(payload, process.env.REFRESH_TOKEN, {
      expiresIn: "14d",
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "none",
    });

    res.status(200).json({ accessToken, ...payload });
  } catch (e) {
    console.log("소셜로그인이 실패하였습니다", e);
    res.status(500).send({ message: e.message });
  }
};

const axios = require("axios");
const jwt = require("jsonwebtoken");
const { users } = require("../../models");

module.exports = async (req, res) => {
  // 소셜로그인과 로그인 controller 분리
  res.send("get user");
  // try {
  //   const socialAccessToken = req;
  //   console.log("request", socialAccessToken);
  // } catch (e) {
  //   console.log("error", e);
  // }
};

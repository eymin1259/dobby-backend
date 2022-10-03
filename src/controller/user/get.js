const axios = require("axios");
const jwt = require("jsonwebtoken");
const { users } = require("../../models");

// 소셜로그인과 로그인 controller 분리
module.exports = async (req, res) => {
  res.send("get user");
};

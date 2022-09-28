const axios = require("axios");
const jwt = require("jsonwebtoken");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const socialAccessToken = req;
    console.log("request", socialAccessToken);
  } catch (e) {
    console.log("error", e);
  }
};

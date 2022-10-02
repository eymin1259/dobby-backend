const jwt = require("jsonwebtoken");
const { user } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    console.log("authorization", authorization);
    const token = authorization.split("")[1];
    await jwt.verify(token, process.env.JWT_SECRET_KEY, async (_, decode) => {
      const info = await user.findOne({ where: { id: decode.id } });
      if (!info) {
        res.status(401).json({ message: "일치하는 유저가 없습니다." });
      }
    });
    return res.status(200).json({ message: "로그아웃 되었습니다." });
  } catch (e) {
    console.log("logout_error", e);
    return res.status(501).json({ message: e.message });
  }
};

const jwt = require("jsonwebtoken");
const { user } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split("")[1];
    await jwt.verify(token, process.env.JWT_SECRET_KEY, async (_, decode) => {
      const info = await user.findOne({ where: { id: decode.id } });

      if (info) {
        await user.destroy({ where: { id: decode.id } });

        res.status(200).send({ message: "회원탈퇴 되었습니다." });
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

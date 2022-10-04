const jwt = require("jsonwebtoken");
const { user } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split("")[1];
    await jwt.verify(token, process.env.JWT_SECRET_KEY, async (_, decode) => {
      const info = await user?.findOne({ where: { id: decode.id } });

      if (info) {
        await user.update(req.body, {
          where: { id: decode.id },
        });
        const userInfo = await user?.findOne({ where: { id: decode.id } });
        res.status(201).send(userInfo);
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

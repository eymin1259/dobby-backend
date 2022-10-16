const jwt = require('jsonwebtoken');

verifyToken = async (req, res, next) => {
  try{
    const { authorization } = req.headers;

    const verificationResult = await jwt.verify(authorization, rocess.env.JWT_SECRET_KEY);
    console.dir(verificationResult);

    req.userInfo = verificationResult;

    next();
  } catch(err) {
    return res.status(401).json({
      code: 401,
      message: 'ACCESS_TOKEN_VERIFICATION_FAIL'
    })
  }
}

module.exports = verifyToken;

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");
    const jwt_payload = jwt.verify(accessToken, process.env.jwt_salt);

    req.user = jwt_payload;
  } catch (error) {
    res.status(401).json({
      status: "Failed!",
      error: "Unauthorized!",
    });
    return;
  }
  next();
};

module.exports = auth;

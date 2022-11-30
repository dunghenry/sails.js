const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
module.exports = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    const accessToken = token.split(" ")[1];
    if (!accessToken) {
      return res.status(404).json({ message: "Token not found!" });
    } else {
      jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET,
        (error, user) => {
          if (error && error.name === "TokenExpiredError") {
            return res.status(403).json({ message: "Token is expired!" });
          } else if (error) {
            return res.status(403).json({ message: "Token is not valid!" });
          }
          req.user = user;
          next();
        }
      );
    }
  } else {
    return res.status(401).json({ message: "You're not authenticated" });
  }
};

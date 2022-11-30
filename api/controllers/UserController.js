const bcrypt = require("bcrypt");
const generateAccessToken = require("../utils/generateToken");
module.exports = {
  register: async (req, res) => {
    const { username, email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "Email already registered" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      }).fetch();
      const { password, ...info } = newUser;
      return res.status(200).json(info);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ message: "Email not already registered" });
      }
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isValidPassword) {
        return res.status(400).json({ message: "Incorrect password" });
      }
      const { password, ...info } = user;
      const accessToken = generateAccessToken(info);
      return res.status(200).json({ ...info, accessToken });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

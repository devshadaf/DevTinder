const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login!");
    }

    const decodedData = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData) {
      return res.status(401).send("Please Login!");
    }

    const { id } = decodedData;
    const user = await User.findById(id).select("-password");
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};

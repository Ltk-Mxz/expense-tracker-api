const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtManager = require("../../../managers/jwtManager");

const login = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, password } = req.body;

  const getUser = await usersModel.findOne({
    email: email,
  });

  if (!getUser) throw "This email is does not exist in the system!";

  const comparePassword = await bcrypt.compare(password, getUser.password);

  if (!comparePassword) throw "Email and password does not match!";

  const accessToken = jwtManager(getUser);

  await res.status(200).json({
    status: "Success!",
    message: "User logged in successfully!",
    accessToken: accessToken,
  });
};

module.exports = login;
